/*
* margot flicker with API key
var flitterAPIkey = "1cf53a79f6457f45e1182a5dd78ff5f5";
*/

var flitter = function flitter(key) {
    if (!(this instanceof flitter)) return new flitter(arguments[0]);
    
    var flitterAPIkey = key || '1cf53a79f6457f45e1182a5dd78ff5f5', 
       localStorage,
       localSync;
        
    function supports_local_storage() { try { return 'localStorage' in window && window.localStorage !== null; } catch(e){ return false; } }
    if (supports_local_storage()) {
        // Generate four random hex digits.
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        // Generate a pseudo-GUID by concatenating random hexadecimal.
        var guid = function() {
            return (S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
        };
        var FlitterStore = function(name) {
            this.name = name;
            var store = window.localStorage.getItem(this.name);
            this.data = (store && JSON.parse(store)) || {};
        };
        _.extend(FlitterStore.prototype, {
            save: function() {
                window.localStorage.setItem(this.name, JSON.stringify(this.data));
            },
            create: function(model) {
                if (!model.id) model.id = model.attributes.id = guid();
                this.data[model.id] = model;
                this.save();
                return model;
            },
            update: function(model) {
                this.data[model.id] = model;
                this.save();
                return model;
            },

            find: function(model) {
                return this.data[model.id];
            },

            findAll: function() {
                return _.values(this.data);
            },
            destroy: function(model) {
                delete this.data[model.id];
                this.save();
                return model;
            }
        });

        localSync = function(method, model, cb) {

            var resp,
                store = model.localStorage || model.collection.localStorage;
            switch (method) {
                case 'read':    resp = model.id ? store.find(model) : store.findAll(); break;
                case 'create':  resp = store.create(model);                            break;
                case 'update':  resp = store.update(model);                            break;
                case 'delete':  resp = store.destroy(model);                           break;
            }

            if (resp && cb && cb.success) {
                cb.success(resp);
            } else {
                alert('your little FlitterStore is not accepting');
            }
        };

        localStorage = new FlitterStore('flitterImages');
    } else {
        localStorage = null;
    }

    var FlickrImage = Backbone.Model.extend({
            sync: localSync,

            fullsize_url: function () {
              return this.image_url('medium');
            },

            thumb_url: function () {
              return this.image_url('square');
            },

            image_url: function (size) {
                var size_code;
                switch (size) {
                  default: size_code = '';
                }
                return 'http://farm' + this.get('farm') + '.static.flickr.com/' + this.get('server') + '/' + this.get('id') + '_' + this.get('secret') + size_code + '.jpg';
            }
        }),

        Image = Backbone.Model.extend({
            sync: localSync,
            localStorage: localStorage,
            initialize: function () {
                _.bindAll(this, 'loadFirstImage');
                this.flickrImages = new FlickrImages();
                this.flickrImages.fetch(this.get('keywords'), this.loadFirstImage);
                this.set({id: this.get('id') || this.get('keywords')});
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
        }),


//TODO 
//Try replacing this 'keyed' flickr call with one to a public search, no key. Either getJSON or full-ajax code. Leave the 'self.add(response.photos.photo);' the same for the data return.

        FlickrImages = Backbone.Collection.extend({
            sync: localSync,
            model: FlickrImage,
            key: flitterAPIkey,
            page: 1,
            fetch: function (keywords, success) {
                var self = this;
                success = success || $.noop;
                this.keywords = keywords || this.keywords;
                $.ajax({
                    url: 'http://api.flickr.com/services/rest/',
                    data: {
                        api_key: self.key,
                        format: 'json',
                        method: 'flickr.photos.search',
                        photo_id: this.id,
                        tags: this.keywords,
                        per_page: 12,
                        page: this.page
                    },
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    success: function (response) {
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
        }),

        FlickrImageView = Backbone.View.extend({
            tagName: 'a',
            template: _.template("<img src='<%= thumb_url() %>' /><p><strong>Show Title in Template</strong><br/>ID PE65000</p><div class='picpod-buttons'> <a href='response.html'><img class='thumbsdown' src='images/flag-thumbsdown.gif' /></a> <a href='response.html'><img class='thumbsup'  src='images/editorspick-thumbsup.gif' /></a>  <a href='response.html'><img class='thumbsup' src='images/keepfornextround.gif' /></a>  </div>"),
            className: 'photo',
            //events: {'click': 'setImageSrc'},
            render: function() {
                $(this.el).html(this.template(this.model));
                $(this.el).addClass('photo');
                
                return this;
            },

            setImageSrc: function (event) {
                this.options.image.set({'src': this.model.fullsize_url()});
            }
            
   
        }),

        ImageView = Backbone.View.extend({
            tagName: 'div',
            className: 'flitterContainer',
            lock: false,
            template: _.template('<div id="<%= id %>" class="flitterWrapper"><img class="flitter" src="" /><a href="#" title="Setup" class="setupIcon"></a></div><div class="flitterFram"><div class="flitterContent"><a href="#" title="Previous Page" class="prev">&#9664;</a><a href="#" title="Next Page" class="next">&#9654;</a></div></div>'),
            initialize: function (options) {
                _.bindAll(this, 'addImage', 'updateSrc', 'setDimensions', 'updateDimensions');
                var keywords = options.img.attr('src').replace('kw:', '');

                this.$el = $(this.el);
                this.ratio = this.options.img.attr('data-ratio');

                this.image = new Image({keywords: keywords, id: options.img.attr('id')});
                this.image.flickrImages.bind('add', this.addImage);
                this.image.bind('change:src', this.updateSrc);
            },

            events: {
                'click .flitterFram a.next'    : 'nextFlickrPhotos',
                'click .flitterFram a.prev'    : 'prevFlickrPhotos'
            },

            render: function() {
                $(this.el).html(this.template({ id: this.image.id.replace(' ', '') }));
                this.image.fetch();

                if (!this.ratio) {
                    this.resize();
                } else {
                    this.$('.flitterWrapper').append('<img style="width: 100%;" class="placeholder" src="images/dingley-dell.gif' + this.ratio + '" />');
                }
                return this;
            },

            updateSrc: function (model, src) {
                var self = this;

                this.$('img.flitter')
                    .css({top: 'auto', left: 'auto', width: 'auto', height: 'auto'})
                    .attr('src', '')
                    .bind('load', self.setDimensions)
                    .attr('src', src);
            },

            setDimensions: function (event) {
                this.image.set({
                    width: this.$('img').width(),
                    height: this.$('img').height()
                });
                this.updateDimensions(this.image);
                $(event.target).unbind('load');
            },

            updateDimensions: function () {
                var image = this.$('img.flitter'),
                    flickrWidth = this.image.get('width'),
                    flickrHeight = this.image.get('height'),
                    flickrAspectRatio = flickrWidth / flickrHeight,
                    clientWidth = this.$('div.flitterWrapper').width(),
                    clientHeight = this.$('div.flitterWrapper').height(),
                    clientAspectRatio = clientWidth / clientHeight;

                if (flickrAspectRatio < clientAspectRatio) {
                    image.css({
                        width: '100%',
                        height: null
                    });
                    image.css({
                        top: ((clientHeight - image.height()) / 2) + 'px',
                        left: null
                    });
                } else {
                    image.css({
                        height: '100%',
                        width: null
                    });
                    image.css({
                        left: ((clientWidth - image.width()) / 2) + 'px',
                        top: null
                    });
                }
            },

            addImage: function (image) {
                this.flickrImageView = new FlickrImageView({model: image, image: this.image});
                this.$('.flitterFram').append(this.flickrImageView.render().el);
            },

            clickSetup: function (event) {
                event.preventDefault();
                this.toggleFram();
            },

            toggleFram: function (event) {
                this.$('.flitterFram').toggle();
            },

            selectImage: function (event) {
                event.preventDefault();

                this.toggleFram();
            },

            nextFlickrPhotos: function (event) {
                event.preventDefault();
                var self = this;
                if(!this.lock) {
                    this.lock = true;
                    this.$('.flitterFram').find('a.photo').remove();
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
                    this.$('.flitterFram').find('a.photo').remove();
                    this.image.flickrImages.prevPage(function() {
                        self.lock = false;
                    });
                }
            },

            resize: function () {
                this.$('div.flitterWrapper').css({
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
    
    // Look for preloaded images on the grid, replace them with whatever the keyword(s) are. (No keyword = new public feed.)
    this.strope = function() {
        var self = this;
        
        $("img[src^='kw:']").each(function () {
            var img = $(this),
                imageView = new ImageView({img: img});
                
            img.replaceWith(imageView.render().el);
        });
    };
};
    
// strope : invoke the power of the keyword

if ($("img[src^='kw:']").length) flitter().strope();