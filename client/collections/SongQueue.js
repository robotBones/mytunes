// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){

    this.on('add',function(){
      console.log('song added to q and q length is', this.length, this);
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended dequeue', function(song){
      console.log('heard a song say it ended', song);
      var toRemove = song || this.at(0);
      console.log('toRemove', toRemove);
      this.dequeue(toRemove);
    }, this);
  },

  playFirst: function(){
    console.log("playing first in queue.", this.at(0));
    this.at(0).play();
  },

  dequeue: function(song){
    console.log('deqqqqing');
    this.remove(song);
    if(this.length === 1){
      this.playFirst();
    }
    this.trigger('next');
  }
});