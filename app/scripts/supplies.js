define('supplies', [
    'models/SupplyModel',
    'views/SupplyView',
    'views/AddSupplyView',
    'views/EditSupplyView',
    'collections/SuppliesCollection'
], function (SupplyModel, SupplyView, AddSupplyView, EditSupplyView, SuppliesCollection) {
    'use strict';

    var supplies = {};

    supplies.SupplyModel = SupplyModel;
    supplies.SupplyView = SupplyView;
    supplies.SuppliesCollection = SuppliesCollection;
    supplies.EditSupplyView = EditSupplyView;
    supplies.AddSupplyView = AddSupplyView;

    return supplies;
});
