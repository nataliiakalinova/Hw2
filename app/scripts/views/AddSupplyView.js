/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'models/SupplyModel',
    'text!templates/AddSupplyView.html',
    'views/StockSelectView',
    'collections/StocksCollection'
], function ($, _, Backbone, SupplyModel, AddSupplyView, StockSelectView) {
    'use strict';


    var AddSupplyView = Backbone.View.extend({

        template: _.template(AddSupplyView),

        events: {
            "click .submit": "addSupply"
        },

        render: function () {
            this.collection.fetch();
            this.$el.html(this.template());

            this.$('#forSelect').append(new StockSelectView().render().$el);
            return this;
        },

        addSupply: function (e) {

            var model = new SupplyModel();

            this.collection.fetch();

            if(this.$('#inputName').val()==="") {
                return;
            }

            var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
            model.set('id', id);
            model.set('name', this.$('#inputName').val());
            model.set('count', this.$('#inputCount').val());

            var selectedSt = this.$('.stock option:selected');

            var val = selectedSt.val();
            model.set('stockId', !!val ? val : "-1");
            model.collection = this.collection;

            model.save();
            this.collection.add(model);
            this.collection.invoke('save');

            this.render();
        }
    });


    return AddSupplyView;
});
