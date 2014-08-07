// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.upPlayCount();
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  upPlayCount: function(){
    var count = this.get('playCount');
    count++;
    console.log(count);
    this.set('playCount', count);
  }
});
