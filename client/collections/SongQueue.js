// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){

    this.on('add',function(){
      if(this.length === 1){
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    console.log("playing first in queue.", this.at(0));
    this.at(0).play();
  },
});