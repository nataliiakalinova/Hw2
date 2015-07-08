define('stocks', [
    'models/StockModel',
    'views/StockView',
    'views/AddStockView',
    'views/EditStockView',
    'views/StockManagementView',
    'views/StockSelectView',
    'collections/StocksCollection'

], function (StockModel, StockView, AddStockView, EditStockView, StockManagementView, StockSelectView, StocksCollection) {
    'use strict';

    var stocks = {};

    stocks.StockModel = StockModel;

    stocks.StockView = StockView;
    stocks.AddStockView = AddStockView;
    stocks.EditStockView = EditStockView;
    stocks.StockManagementView = StockManagementView;
    stocks.StockSelectView = StockSelectView;

    stocks.StocksCollection = StocksCollection;


    return stocks;
});
