define([
    'jquery',
    'underscore',
    'backbone',
    'models/StockModel',
    'text!templates/AddStockView.html'
], function ($, _, Backbone, StockModel, AddStockView) {
    'use strict';

    var AddStockView = Backbone.View.extend({

        template: _.template(AddStockView),

        events: {
            "click .submit": "addStock"
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        addStock: function (e) {
            var model = new StockModel();

            // name should be typed
            if (this.$('#inputName').val() === "") {
                return;
            }

            // generate random id
            var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

            // set attributes for new stock
            model.set('id', id);
            model.set('name', this.$('#inputName').val());
            model.set('location', this.$('#inputLocation').val());

            this.collection.create(model);
        }
    });

    return AddStockView;
});
