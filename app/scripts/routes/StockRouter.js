/*global define*/

define([
    'jquery',
    'backbone',
    'stocks',
    'supplies',
    'app'

], function ($, Backbone, stocksModule, suppliesModule, app) {
    'use strict';

    var StockRouterRouter = Backbone.Router.extend({
        routes: {

            "":                 "home",
            "stocks":           "stocks",
            "stock/:id":        "stock",
            "supply/:id":       "supply",
            "supplies":         "supplies",
            "manage":           "manage"

        },

        initialize: function () {
            this.$content = $("#content");

            this.stCol = new stocksModule.StocksCollection();
            this.spCol = new suppliesModule.SuppliesCollection();

        },

        home: function () {
            this.$content.html(new app.HomeView().render().el);
            app.selectMenuItem('home');
        },

        stocks: function () {

            this.stCol.fetch();
            var view = new stocksModule.StockView({collection: this.stCol});

            this.$content.html(view.render().el);
            this.$content.append(new stocksModule.AddStockView({collection: this.stCol}).render().$el);

            app.selectMenuItem('stocks');
        },

        stock: function (params) {

            this.$content.empty();
            this.stCol.fetch();

            var element = this.stCol.findWhere({'id': params});
            var view = new stocksModule.EditStockView({model: element});
            this.$content.html(view.render().el);
        },

        supply: function (params) {

            this.$content.empty();
            this.spCol.fetch();

            var element = this.spCol.findWhere({'id': params});
            var view = new suppliesModule.EditSupplyView({model: element});
            this.$content.html(view.render().el);
        },

        supplies: function () {

            this.spCol.fetch();
            var view = new suppliesModule.SupplyView({collection: this.spCol});
            this.$content.html(view.render().el);
            this.spCol.fetch();
            this.$content.append(new suppliesModule.AddSupplyView({collection: this.spCol}).render().$el);

            app.selectMenuItem('supplies');
        },

        manage: function () {
            this.$content.empty();
            this.spCol.fetch();

            var view = new stocksModule.StockManagementView({collection: this.spCol});
            this.$content.html(view.render().el);
            app.selectMenuItem('manage');
        }

    });

    return StockRouterRouter;
});
