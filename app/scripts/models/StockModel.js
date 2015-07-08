define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';



    var StockModel = Backbone.Model.extend({

        idAttribute: "id"

    });

    return StockModel;
});

