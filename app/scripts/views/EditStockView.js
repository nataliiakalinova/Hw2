/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/AddStockView.html'
], function ($, _, Backbone, AddStockView) {
    'use strict';


    var EditStockView = Backbone.View.extend({

        template: _.template(AddStockView),

        events: {
            "click .submit": "editStock",
            "click .cancel": "cancel"
        },

        render: function () {
            this.$el.html(this.template());
            this.$('#inputName').val(this.model.attributes.name);
            this.$('#inputLocation').val(this.model.attributes.location);
            return this;
        },

        cancel: function (e) {
            e.preventDefault();
            Backbone.history.navigate('#stocks', {
                trigger: true
            });
        },

        editStock: function (e) {
            this.model.set('name', this.$('#inputName').val());
            this.model.set('location', this.$('#inputLocation').val());
            this.model.save();

            Backbone.history.navigate('#stocks', {
                trigger: true
            });

            e.preventDefault();
        }
    });

    var OptionView = Backbone.View.extend({

        tagName: 'option',

        render: function () {
            this.$el.html(this.model.attributes.name).val(this.model.attributes.id);

            return this;
        }
    });

    return EditStockView;
});
