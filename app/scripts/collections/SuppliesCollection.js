define([
    'underscore',
    'backbone',
    'models/SupplyModel',
    'app'
], function (_, Backbone, SupplyModel, app) {
    'use strict';

    var SuppliesCollection = Backbone.Collection.extend({
        initialize: function () {
            this._changing = true;
            this.localStorage = app.ls
        },

        model: SupplyModel

    });

    return SuppliesCollection;
});
