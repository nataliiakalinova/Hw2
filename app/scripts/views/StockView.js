/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'models/StockModel',
    'text!templates/StockView.html',
    'text!templates/StockItemView.html'
], function ($, _, Backbone, StockModel, StocksTemplate, StockTemplate) {
    'use strict';

    var StockView = Backbone.View.extend({

        initialize: function(){
            this.listenTo(this.collection, 'add remove change', this.render);
        },

        template: _.template(StocksTemplate),

        tagName: 'table',

        className: 'table table-striped table-hover',

        events: {},

        render: function () {
            this.$el.empty();
            this.$el.append(this.template());

            _.each(this.collection.models, function (stock) {
                this.$el.append(new StockItemView({model: stock}).render().$el);
            }, this);

            return this;
        }
    });

    var StockItemView = Backbone.View.extend({
        template: _.template(StockTemplate),

        tagName: 'tr',

        events: {
            "click .delete": "deleteStock"
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        deleteStock: function () {
            this.model.destroy();
        }
    });


    return StockView;
});
