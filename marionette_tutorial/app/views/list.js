var Marionette = require('backbone.marionette');

var ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('../templates/todoitem.hbs')
});


var TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ToDo
});


module.exports = TodoList;