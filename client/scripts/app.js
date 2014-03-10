//define(['marionette'], function(Marionette) {
//  'use strict';
//
//  var App = new Marionette.Application();
//
//  App.addRegions({
//
//  });
//
//  App.on('initialize:after', function() {
//    console.log('Application has started');
//  });
//
//  return App;
//});


define(function() {
    'use strict';

    function App() {
        this.start = function() {
            console.log('Application has started');
        }
    }
    return new App();
});