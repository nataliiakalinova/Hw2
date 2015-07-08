/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/HomeView.html'
], function ($, _, Backbone, HomeTemplate) {
    'use strict';

    var HomeView = Backbone.View.extend({

        template: _.template(HomeTemplate),

        render: function () {
            this.$el.html(this.template());

            return this;
        }
    });


    return HomeView;
});
