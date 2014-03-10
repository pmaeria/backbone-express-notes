
// temporarily storing functions here... organize this later

//var NoteModel = Backbone.Model.extend({
//
//    defaults: {
//        Title: 'Unnamed',
//        Created: new Date(),
//        Content: ''
//    }
//});
//
//var NoteCollection = Backbone.Collection.extend({
//    localStorage: new Backbone.LocalStorage('NoteCollection'),
//    model: NoteModel,
//    initialize: function () {
//        console.log('note collection initialized');
//    }
//});
//
//var NoteItemView = Backbone.View.extend({
//
//    initialize: function () {
//        console.log('Note item View init');
//    },
//    render: function () {
//        return this.$el(this.model.toJSON());
//    }
//});
//
//var NotesRouter = Backbone.Router.extend({
//
//    routes: {
//        '': 'index',
//        'note/:noteId': 'note'
//    },
//
//    index: function () {
//        console.log('index');
//    },
//
//    note: function (noteId) {
//        console.log('note', noteId);
//    }
//});
//
//var NoteListView = Backbone.View.extend({
//
//    initialize: function () {
//        console.log('Note item View init');
//    },
//    render: function () {
//        this.collection.each(function (note) {
//            var noteItemView = new NoteItemView({ model: note });
//            this.$el.append(noteItemView);
//        });
//
//        return this;
//    }
//});
//
//var NoteDetailsView = Backbone.View.extend();
//

//var NoteRouter = Backbone.Router.extend({
//
//});