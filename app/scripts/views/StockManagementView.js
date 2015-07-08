/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/SupplyManagementItemView.html',
    'text!templates/StockManagementView.html',
    'views/StockSelectView',
    'collections/StocksCollection'

], function ($, _, Backbone, SupplyManagementItemTemplate, StockManagementView, StockSelectView, StocksCollection) {
    'use strict';

    var StockManagementView = Backbone.View.extend({

        initialize: function(){
            this.listenTo(this.collection, 'add remove change', this.render);
        },

        template: _.template(StockManagementView),

        tagName: 'div',

        events: {
            "click .transfer": "transfer"
        },

        render: function () {
            this.$el.empty();

            this.collection.fetch();
            this.$el.append(this.template());

            // supplies
            _.each(this.collection.models, function (item) {
                this.$('#select').append(new SupplyManagementItemView({model: item}).render().$el);
            }, this);

            // stocks
            this.$el.append(new StockSelectView().render().$el);

            return this;
        },

        transfer: function (e) {
            e.preventDefault();
            var selectedSp = this.$(".supply option:selected");
            var selectedSt = this.$('.stock option:selected');

            // change stock for each selected supply
            _.each(selectedSp, function (item) {
                var changedSp = this.collection.findWhere({id: item.value});
                changedSp.set('stockId', selectedSt.val());
                changedSp.save();
            }, this);

            this.render();

        }
    });

    var SupplyManagementItemView = Backbone.View.extend({
        template: _.template(SupplyManagementItemTemplate),

        tagName: 'option',

        render: function () {
            // find stock name
            var col = new StocksCollection();
            col.fetch();
            var temp = col.findWhere({id: this.model.attributes.stockId});
            if (temp) {
                this.model.attributes.stockName = temp.attributes.name;
            }
            else {
                this.model.attributes.stockName = "";
            }

            this.$el.html(this.template(this.model.toJSON())).val(this.model.attributes.id);

            return this;
        }
    });



    return StockManagementView;
});
