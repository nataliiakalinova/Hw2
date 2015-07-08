define([
    'underscore',
    'backbone',
    'models/StockModel',
    'localstorage'
], function (_, Backbone, StockModel, localstorage) {
    'use strict';

    var StocksCollection = Backbone.Collection.extend({
        model: StockModel,

        localStorage: new Backbone.LocalStorage("Stocks")
    });

    return StocksCollection;
});
