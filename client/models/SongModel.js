// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log("model told to play");
    this.trigger('play', this);
  },

  enqueue: function(){
    console.log("enqueue invoked in SongModel", this);
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    console.log("removing from the queue", this);
    this.trigger('dequeue', this);
  }
});
