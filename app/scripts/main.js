/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        text: '../bower_components/requirejs-text/text',
        localstorage: '../bower_components/backbone.localstorage/backbone.localStorage'
    }
});

require([
    'backbone',
    'routes/StockRouter'
], function (Backbone, StockRouter) {
    var router = new  StockRouter();
    Backbone.history.start();
});
