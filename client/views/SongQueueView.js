// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.collection.on('add remove', function(){
      this.render();
    },this);
  },

  render: function() {
    this.$el.html('<th>Queue</th>');

    if(this.collection.length > 0){
      this.collection.each(function(song){
        var entry = new SongQueueEntryView({model: song});
        this.$el.append(entry.render());
      },this);
    }
    return this.$el;
  }

});
