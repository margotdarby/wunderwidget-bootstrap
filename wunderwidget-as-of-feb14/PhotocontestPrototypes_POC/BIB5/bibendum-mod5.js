$(function(){

  var API_KEY = "1cf53a79f6457f45e1182a5dd78ff5f5";  //the mrsswift NoApp TestOnly key
  var BASE_FLICKR_URL = "http://api.flickr.com/services/rest/?"
  //http://www.flickr.com/photos/


  window.Photo = Backbone.Model.extend({

    url: function(){
      var params = {
       // "method"         : 'flickr.photos.getInfo',
        "method"         : 'flickr.photos.search',//seems to work with either
        "api_key"        : API_KEY,
        "photo_id"       : this.id,
        "format"         : 'json',
        "nojsoncallback" : 1
         
      }
      return _.reduce(
        params,
        function(url, value, key) { return url + key + '=' + value + '&' },
        BASE_FLICKR_URL
      );
    },

  

  });

  window.PhotoSet = Backbone.Collection.extend({
    model: Photo,

    initialize: function() {
      this._meta = {
         sortBy: 'date',
         sortOrder: 'desc'
      };

      this.setComparator(this.meta('sortBy'), this.meta('sortOrder'));
    },

    url: function(){
      var params = {
       //"method"        : 'flickr.photos.getInfo',
        "method"         : 'flickr.photosets.getPhotos',
        "api_key"        : API_KEY,
        "photoset_id"    : '72157631567199474',   //this is from 'bibendum' in mrsswift
        "extras"         : 'date_taken%2Curl_t%2Curl_m%2Curl_s%2Ctags',
        "format"         : 'json',
        "nojsoncallback" : 1
      }
      return _.reduce(
        params,
        function(url, value, key) { return url + key + '=' + value + '&' },
        BASE_FLICKR_URL
      );
    },






    meta: function(prop, value) {
        if (value === undefined) {
            return this._meta[prop]
        } else {
            this._meta[prop] = value;
        }
    },

    parse: function(response){
      return response.photoset.photo;
    },

    comparatorConfigurable: function(photo, sortField, sortOrder){
      if (sortField == 'date'){
        var sortValue = Date.parse(photo.get('datetaken'))*1000;
      } else if(sortField == 'alpha') {
        var sortValue = $.trim(photo.get("title").toLowerCase());
      }else{
        throw "Unknown sort field " + sortField;
      }


      if (sortOrder === 'asc') {
        return sortValue;
      } else {
        if (typeof sortValue === 'string'){
          return String.fromCharCode.apply(String,
              _.map(sortValue.split(""), function (c) {
                  return 0xffff - c.charCodeAt();
              })
          );
        }else{
          return -sortValue;
        }
      }
    },


    setComparator: function(sortField, sortOrder) {
      console.log("Setting sort order " + sortField + " " + sortOrder);
      var collection = this;
      this.comparator = function(photo) {
        return collection.comparatorConfigurable(photo, sortField, sortOrder);
      };
    },

    setSortBy: function(sortBy){
      this.meta('sortBy', sortBy);
      this.setComparator(this.meta('sortBy'), this.meta('sortOrder'));
      this.sort();
    }

  });

  window.Photos = new PhotoSet();

  window.PhotoModalView = Backbone.View.extend({
    el: $("#show-photo-modal"),

    photoModalBodyTemplate: _.template($('#show-photo-modal-body-template').html()),

    initialize: function(photo){
      this.photo = photo;
    },

    render: function(){
      this.$('.modal-body').html(this.photoModalBodyTemplate({ 'photo':this.photo }));
      this.$('.modal-body .tabs').pills();
      this.$('h3').html(this.photo.get('title')) ;
      this.$('h5').html(this.photo.get('id'));
   this.$('#show-photo-modal-f-button').attr('href', 'http://www.flickr.com/photos/mrsswift/' + this.photo.get('id'));

//other sources and sets:      
//http://www.flickr.com/photos/becklectic/4041944919/in/set-72057594119526437/
//http://www.flickr.com/photos/sortingoutscience/sets/72157603645445105/
  

      $('#show-photo-modal').modal('show');
    }

  });

  window.PhotoPopoverView = Backbone.View.extend({

    photoPopoverTemplate: _.template($('#photo-popover-content').html()),
    spinnerTemplate: _.template($('#spinner-template').html()),

    initialize: function(photo){
      this.photo = photo;
    },

    render: function(){
      var photoPopoverTemplate = this.photoPopoverTemplate;
      var photo = this.photo;
      if(photo.get('details_loaded')){
        return photoPopoverTemplate({ 'photo': photo });
      }

      console.log("Loading " + photo.id + " details");
      photo.fetch({
        success: function(){
          $('#spinner' + photo.id).replaceWith(photoPopoverTemplate({ 'photo': photo }));
        }
      });

      //return this.spinnerTemplate({ 'spinnerId': 'spinner' + photo.id })
    }
  });

  window.PhotoWallView = Backbone.View.extend({

    el: $("#gateway-content"),

    initialize: function() {
      console.log("Init PhotoWall View");
      Photos.bind('reset', this.render, this);
      Photos.fetch();
    },

    events: {
      "click a[rel='photoPopover']": "photoClick"
    },

    render: function() {
      console.log("Render PhotoWall View");
      var template = _.template($('#photo-gateway-template').html());
      // FIXME change this to construct all HTML and then swap it out
      this.$('#gateway-photos').html('');
      Photos.each(function(photo, index){
        this.$('#gateway-photos').append(template({
          photo: photo,
          index: index
        }));
      });

      $('#bibby-count').html(Photos.size());

      //popover is left in here but is not necessary
      this.$("a[rel=photoPopover]")
        .popover({
          offset: 10,
          html: true,
          content: function() {
            var photo = Photos.get($(this).data('photo-id'));
            var popoverView = new PhotoPopoverView(photo);
            return popoverView.render();
          }
      });

      return this;
    },

    photoClick: function(e) {
        e.preventDefault();

        var photo = Photos.get($(e.currentTarget).data('photo-id'));
        var modalView = new PhotoModalView(photo);
        modalView.render();
    }

  });

  window.GatewayView = Backbone.View.extend({

    el: $("#backbone-Bib-app"),

    initialize: function() {
      this.photoWall = new PhotoWallView;
      this.render();
    },

    render: function() {
      console.log("Render Gateway View");

      $('.topbar').dropdown();

      this.updateSortMenu();

      $('#show-photo-modal').modal({
        keyboard: true,
        backdrop: true
      });

      $('#about-modal').modal({
        keyboard: true,
        backdrop: true
      });
    },

    updateSortMenu: function() {
      console.log("Update sort order");
      $('#sort-order-menu-title').html(this.sortOrderByDescription());
      var reverseSortBy = Photos.meta('sortOrder') === 'asc' ? 'desc' : 'asc';
      $('#sort-order-menu-order-item').attr('href', '#sort/' + Photos.meta('sortBy') + '/' + reverseSortBy);
    },

    sortOrderByDescription: function(){
      return $("a[data-sort-order='" + Photos.meta('sortBy') + "']").html();
    }

  });

  window.App = new GatewayView;

  var BibRouter = Backbone.Router.extend({

    routes: {
      "sort/:sortBy/:sortOrder": "sort"
    },

    sort: function(sortBy, sortOrder) {
      Photos.meta('sortOrder', sortOrder);
      Photos.setSortBy(sortBy);
      App.updateSortMenu();
    }

  });

  var appRouter = new BibRouter;
  Backbone.history.start();

});
