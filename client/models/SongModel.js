// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log("model told to play");
    this.upPlayCount();
    this.trigger('play', this);
  },

  enqueue: function(){
    console.log("enqueue invoked in SongModel", this);
    this.trigger('enqueue', this);
  },

  ended: function(){
    console.log("say end from the queue", this);
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
