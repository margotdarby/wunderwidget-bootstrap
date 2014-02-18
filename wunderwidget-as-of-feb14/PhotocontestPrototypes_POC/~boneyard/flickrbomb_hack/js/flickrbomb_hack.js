

// @param [key] Optionally pass a Flickr API key on instantiation, or just hardcode it below.
var flickrhack = function flickrhack(key) {
    if (!(this instanceof flickrhack)) return new flickrhack(arguments[0]);
    
   
    var flickrhackAPIkey = '1cf53a79f6457f45e1182a5dd78ff5f5',  // mrsswift NoApp TestOnly

   
        flickrhackLicenseTypes = '',
        localStorage,
        localSync;
        
   
    
    function supports_local_storage() { try { return 'localStorage' in window && window.localStorage !== null; } catch(e){ return false; } }

    if (supports_local_storage()) {

        // A simple module to replace `Backbone.sync` with *localStorage*-based
        // persistence. Models are given GUIDS, and saved into a JSON object. Simple
        // as that.

        // Generate four random hex digits.
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };

        // Generate a pseudo-GUID by concatenating random hexadecimal.
        var guid = function() {
            return (S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
        };

        // Our Store is represented by a single JS object in *localStorage*. Create it
        // with a meaningful name, like the name you'd give a table.
        var Store = function(name) {
            this.name = name;
            var store = window.localStorage.getItem(this.name);
            this.data = (store && JSON.parse(store)) || {};
        };

        _.extend(Store.prototype, {

            // Save the current state of the **Store** to *localStorage*.
            save: function() {
                window.localStorage.setItem(this.name, JSON.stringify(this.data));
            },

            // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
            // have an id of it's own.
            create: function(model) {
                if (!model.id) model.id = model.attributes.id = guid();
                this.data[model.id] = model;
                this.save();
                return model;
            },

            // Update a model by replacing its copy in `this.data`.
            update: function(model) {
                this.data[model.id] = model;
                this.save();
                return model;
            },

            // Retrieve a model from `this.data` by id.
            find: function(model) {
                return this.data[model.id];
            },

            // Return the array of all models currently in storage.
            findAll: function() {
                return _.values(this.data);
            },

            // Delete a model from `this.data`, returning it.
            destroy: function(model) {
                delete this.data[model.id];
                this.save();
                return model;
            }

        });
        // Override `Model.sync`, `Collection.sync`, or `Backbone.sync` to use delegate to the model or collection's
        // *localStorage* property, which should be an instance of `Store`.
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
                // Swallow errors for now
                // error('Record not found');
            }
        };

        localStorage = new Store('mrsswiftImages');
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
                  case 'square': size_code = '_s'; break; // 75x75
                  case 'medium': size_code = '_z'; break; // 640 on the longest side
                  case 'large': size_code = '_b'; break; // 1024 on the longest side
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

        FlickrImages = Backbone.Collection.extend({
            sync: localSync,

            model: FlickrImage,

            key: flickrhackAPIkey,

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
                        tags: this.keywords,
                        per_page: 12,
                        page: this.page,
                        license: flickrhackLicenseTypes
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

            template: _.template("<img src='<%= thumb_url() %>' />"),

            className: 'photo',

            

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

            className: 'flickrhackContainer',

            lock: false,

            template: _.template('<div id="<%= id %>" class="flickrhackWrapper"><img class="flickrhack" src="" /><a href="#" title="Setup" class="setupIcon"></a></div><div class="flickrhackFlyout"><div class="flickrhackContent"><a href="#" title="Previous Page" class="prev">&#9664;</a><a href="#" title="Next Page" class="next">&#9654;</a></div></div>'),

            initialize: function (options) {
                _.bindAll(this, 'addImage', 'updateSrc', 'setDimensions', 'updateDimensions');
                var keywords = options.img.attr('src').replace('kw://', '');

                this.$el = $(this.el);
                this.ratio = this.options.img.attr('data-ratio');

                this.image = new Image({keywords: keywords, id: options.img.attr('id')});
                this.image.flickrImages.bind('add', this.addImage);
                this.image.bind('change:src', this.updateSrc);
            },

            events: {
                //
                
            },

            render: function() {
                $(this.el).html(this.template({ id: this.image.id.replace(' ', '') }));
                this.image.fetch();

                if (!this.ratio) {
                    this.resize();
                } else {
                    this.$('.flickrhackWrapper').append('<img style="width: 100%;" class="placeholder" src="http://placehold.it/' + this.ratio + '" />');
                }
                return this;
            },

            updateSrc: function (model, src) {
                var self = this;

                this.$('img.flickrhack')
                    .css({top: 'auto', left: 'auto', width: '198px', height: 'auto'})
                    .attr('src', '')
                    .bind('load', self.setDimensions)
                    .attr('src', src);
            },

            setDimensions: function (event) {
                //
            },

            updateDimensions: function () {
                //
                
            },

             addImage: function (image) {
                this.flickrImageView = new FlickrImageView({model: image, image: this.image});
                this.$('.flickrbombFlyout').append(this.flickrImageView.render().el);
            },

            clickSetup: function (event) {
               //
            },

            toggleFlyout: function (event) {
                //
            },

            selectImage: function (event) {
               //
            },

            nextFlickrPhotos: function (event) {
                //
            },
            prevFlickrPhotos: function (event) {
               //
            },

            resize: function () {
                this.$('div.flickrhackWrapper').css({
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
    
    // Replace any placeholders with flickr images
    this.dealapic = function() {
        var self = this;
        
        $("img[src^='kw://']").each(function () {
            var img = $(this),
                imageView = new ImageView({img: img});
                
            img.replaceWith(imageView.render().el);
        });
    };

  
};
    
// dealapic on sight! Just on include.
if ($("img[src^='kw://']").length) flickrhack().dealapic();