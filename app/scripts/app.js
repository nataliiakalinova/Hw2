define('app', [
    'views/HomeView',
    'localstorage'
], function (HomeView) {
    'use strict';

    var app = {};

    app.selectMenuItem = function(menuItem) {
        $('.header .nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    };

    app.HomeView = HomeView;

    app.ls = new Backbone.LocalStorage("Supplies");

    return app;
});
