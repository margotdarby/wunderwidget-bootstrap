//newboot oct 9
//var API_KEY = "1cf53a79f6457f45e1182a5dd78ff5f5";  //the mrsswift NoApp TestOnly key
var flickrbombAPIkey = "1cf53a79f6457f45e1182a5dd78ff5f5";
var keywords = "misty of chincoteague";

var FlickrImage = Backbone.Model.extend({
   fullsize_url: function () {
      return this.image_url('medium');
   },
   thumb_url: function () {
      return this.image_url('square');
   },
   image_url: function (size) {
      var size_code;
      switch (size) {
         case 'square': size_code = '_s'; break; // 75x75
         case 'medium': size_code = '_z'; break; // 640 on the longest side
         case 'large': size_code = '_b'; break; // 1024 on the longest side
         default: size_code = '';
      }
      return "http://farm" + this.get('farm') + ".static.flickr.com/" + this.get('server') + "/" +this.get('id') + "_" + this.get('secret') + size_code + ".jpg";
   }
})

//flickrImage.image_url('large')//what we call with

var FlickrImages = Backbone.Collection.extend({
   model: FlickrImage,
   key: flickrbombAPIkey,
   page: 1,
   fetch: function (keywords, success) {
      var self = this;
      success = success || $.noop;
      this.keywords = keywords || this.keywords;
      $.ajax({
         url : 'http://api.flickr.com/services/rest/',
         data : {
            api_key : '1cf53a79f6457f45e1182a5dd78ff5f5',
            format : 'json',
            method : 'flickr.photos.search',
            tags : this.keywords,
            per_page : 9,
            page : this.page,
            license : flickrbombLicenseTypes
         },
         dataType : 'jsonp',
         jsonp : 'jsoncallback',
         success : function (response) {
            self.add(response.photos.photo);
            success();
         }
      });
   },
   nextPage: function (callback) {
      this.page += 1;
      this.remove(this.models);
      this.fetch(null, callback);
   },
   prevPage: function(callback) {
      if (this.page > 1) {this.page -= 1;}
      this.remove(this.models);
      this.fetch(null, callback);
   }
});

var localStorage = (supports_local_storage()) ? new Store("flickrBombImages") : null;
var FlickrBombImage = Backbone.Model.extend({
   localStorage: localStorage,
   initialize: function () {
      _.bindAll(this, 'loadFirstImage');
      this.flickrImages = new FlickrImages();
      this.flickrImages.fetch(this.get('keywords'), this.loadFirstImage);
      this.set({id: this.get("id") || this.get('keywords')});
      this.bind('change:src', this.changeSrc);
   },
   changeSrc: function () {
      this.save();
   },
   loadFirstImage: function () {
      if (this.get('src') === undefined) {
         this.set({src: this.flickrImages.first().image_url()});
      }
   }
});

var FlickrBombImageView = Backbone.View.extend({
   tagName: "div",
   className: "flickrbombContainer",
   lock: false,
   template: _.template('<div id="<%= this.image.id.replace(" ","") %>" ... </div>'),
   initialize: function (options) {
      _.bindAll(this, 'addImage', 'updateSrc', 'setDimentions', 'updateDimentions');
      var keywords = options.img.attr('src').replace('flickr://', '');
      this.$el = $(this.el);
      this.image = new FlickrBombImage({keywords: keywords, id: options.img.attr('id')});
      this.image.flickrImages.bind('add', this.addImage);
      this.image.bind('change:src', this.updateSrc);
   },
            events: {
                'click .setupIcon'                  : 'clickSetup',
                'click .flickrbombFlyout a.photo'   : 'selectImage',
                'click .flickrbombFlyout a.next'    : 'nextFlickrPhotos',
                'click .flickrbombFlyout a.prev'    : 'prevFlickrPhotos'
            },

            render: function() {
                $(this.el).html(this.template({ id: this.image.id.replace(' ', '') }));
                this.image.fetch();

                if (!this.ratio) {
                    this.resize();
                } else {
                    this.$('.flickrbombWrapper').append('<img style="width: 100%;" class="placeholder" src="http://placehold.it/' + this.ratio + '" />');
                }
                return this;
            },

            updateSrc: function (model, src) {
                var self = this;

                this.$('img.flickrbomb')
                    .css({top: 'auto', left: 'auto', width: 'auto', height: 'auto'})
                    .attr('src', '')
                    .bind('load', self.setDimentions)
                    .attr('src', src);
            },

            setDimentions: function (event) {
                this.image.set({
                    width: this.$('img').width(),
                    height: this.$('img').height()
                });
                this.updateDimentions(this.image);
                $(event.target).unbind('load');
            },

            updateDimentions: function () {
                var image = this.$('img.flickrbomb'),
                    flickrWidth = this.image.get('width'),
                    flickrHeight = this.image.get('height'),
                    flickrAspectRatio = flickrWidth / flickrHeight,
                    clientWidth = this.$('div.flickrbombWrapper').width(),
                    clientHeight = this.$('div.flickrbombWrapper').height(),
                    clientAspectRatio = clientWidth / clientHeight;

                if (flickrAspectRatio < clientAspectRatio) {
                    image.css({
                        width: '100%',
                        height: null
                    });
                    image.css({
                        top: ((clientHeight - image.height()) / 100) + 'px',
                        left: null
                    });
                } else {
                    image.css({
                        height: '100%',
                        width: null
                    });
                    image.css({
                        left: ((clientWidth - image.width()) / 100) + 'px',
                        top: null
                    });
                }
            },

            addImage: function (image) {
                this.flickrImageView = new FlickrImageView({model: image, image: this.image});
                this.$('.flickrbombFlyout').append(this.flickrImageView.render().el);
            },

            clickSetup: function (event) {
                event.preventDefault();
                this.toggleFlyout();
            },

            toggleFlyout: function (event) {
                this.$('.flickrbombFlyout').toggle();
            },

            selectImage: function (event) {
                event.preventDefault();

                this.toggleFlyout();
            },

            nextFlickrPhotos: function (event) {
                event.preventDefault();
                var self = this;
                if(!this.lock) {
                    this.lock = true;
                    this.$('.flickrbombFlyout').find('a.photo').remove();
                    this.image.flickrImages.nextPage(function() {
                        self.lock = false;
                    });
                }
            },
            prevFlickrPhotos: function (event) {
                event.preventDefault();
                var self = this;
                if(!this.lock) {
                    this.lock = true;
                    this.$('.flickrbombFlyout').find('a.photo').remove();
                    this.image.flickrImages.prevPage(function() {
                        self.lock = false;
                    });
                }
            },

            resize: function () {
                this.$('div.flickrbombWrapper').css({
                    width: this.width() + 'px', 
                    height: this.height() + 'px'
                });
            },

            width: function () {
                return parseInt(this.options.img.width(), 10);
            },

            height: function () {
                return parseInt(this.options.img.height(), 10);
            }

        });
    
    
    
$("img[src^='flickr://']").each(function () {
   var img = $(this),
   flickrBombImageView = new FlickrBombImageView({img: img});
   img.replaceWith(flickrBombImageView.render().el);
});



