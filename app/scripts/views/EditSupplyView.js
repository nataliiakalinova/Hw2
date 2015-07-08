/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/AddSupplyView.html',
    'views/StockSelectView'
], function ($, _, Backbone, AddSupplyView, StockSelectView) {
    'use strict';


    var EditSupplyView = Backbone.View.extend({

        template: _.template(AddSupplyView),

        events: {
            "click .submit": "editStock",
            "click .cancel": "cancel"
        },

        render: function () {
            this.$el.html(this.template());
            this.$('#inputName').val(this.model.attributes.name);
            this.$('#inputCount').val(this.model.attributes.count);
            this.$('#forSelect').append(new StockSelectView().render().$el);
            return this;
        },

        cancel: function (e) {
            e.preventDefault();
            Backbone.history.navigate('#supplies', {
                trigger: true
            });
        },

        editStock: function (e) {
            this.model.set('name', this.$('#inputName').val());
            this.model.set('count', this.$('#inputCount').val());

            var selectedSt = this.$('.stock option:selected');

            this.model.set('stockId', selectedSt.val());
            this.model.save();

            Backbone.history.navigate('#supplies', {
                trigger: true
            });

            e.preventDefault();
        }
    });

    return EditSupplyView;
});
