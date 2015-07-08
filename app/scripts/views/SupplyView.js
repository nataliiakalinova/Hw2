/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'models/SupplyModel',
    'text!templates/SupplyView.html',
    'text!templates/SupplyItemView.html',
    'text!templates/AddSupplyView.html',
    'collections/StocksCollection'

], function ($, _, Backbone, SupplyModel, SuppliesView, SupplyTemplate, AddSupplyView, StocksCollection) {
    'use strict';

    var SupplyView = Backbone.View.extend({

        initialize: function(){
            this.listenTo(this.collection, 'remove add change', this.render);
        },

        template: _.template(SuppliesView),

        tagName: 'table',

        id: '',

        className: 'table table-striped table-hover',

        events: {},

        render: function () {
            this.$el.empty();

            this.$el.append(this.template());

            _.each(this.collection.models, function (supply) {
                this.$el.append(new SupplyItemView({model: supply}).render().$el);
            }, this);

            return this;
        }
    });

    var SupplyItemView = Backbone.View.extend({

        template: _.template(SupplyTemplate),

        tagName: 'tr',

        id: '',

        className: '',

        events: {
            "click .delete": "deleteSupply"
        },

        render: function () {
            var col = new StocksCollection();
            col.fetch();

            this.model.attributes.stockId = this.model.attributes.stockId || '';

            var temp = col.findWhere({id: this.model.attributes.stockId});
            if (temp) {
                this.model.attributes.stockName = temp.attributes.name;
            }
            else {
                this.model.attributes.stockName = "";
            }
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        deleteSupply: function () {
            this.model.destroy();
        }
    });


    return SupplyView;
});
