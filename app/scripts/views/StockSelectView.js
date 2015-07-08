/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/StocksCollection'
], function ($, _, Backbone, StocksCollection) {
    'use strict';

    var StockSelectView = Backbone.View.extend({

        tagName: 'select',

        id: "#select",

        className: "form-control stock",

        render: function () {
            var stCol = new StocksCollection();
            stCol.fetch();
            _.each(stCol.models, function (stock) {
                this.$el.append(new OptionView({model: stock}).render().$el)
            }, this);
            return this;
        }
    });

    var OptionView = Backbone.View.extend({

        tagName: 'option',

        render: function () {
            this.$el.html(this.model.attributes.name).val(this.model.attributes.id);

            return this;
        }
    });

    return StockSelectView;
});
