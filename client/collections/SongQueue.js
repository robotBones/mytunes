// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){

    this.on('add',function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended dequeue', function(song){
      var toRemove = song || this.at(0);
      this.dequeue(toRemove);
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  dequeue: function(song){
    this.remove(song);
    if(this.length === 1){
      this.playFirst();
    }
    this.trigger('next');
  }
});