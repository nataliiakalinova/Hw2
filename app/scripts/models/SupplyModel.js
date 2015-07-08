define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, app) {
    'use strict';

    var SupplyModel = Backbone.Model.extend({

        initialize: function () {
            this._changing = true;
            this.localStorage = app.ls
        },

        defaults: {
            count: 0
        },

        idAttribute: "id"


    });

    return SupplyModel;
});
