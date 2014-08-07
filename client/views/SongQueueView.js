// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', function(){
      this.render();
    },this);
  },

  render: function() {
    this.collection.each(function(song){
      var entry = new SongQueueEntryView({model: song});
      entry.render();
    });
    return this.$el;
  }

});
