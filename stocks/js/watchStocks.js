var watchModule = angular.module( 'watchStocksService', [] );

watchModule.service('watchStocksService', function(){
  this.getData= function(){
    var symbols = [
      {symbol: "AAPL"},
      {symbol: "GOOG"},
      {symbol: "ORCL"},
      {symbol: "NOV"},
      {symbol: "HIBB"},
      {symbol: "IBM"}
    ];
    return symbols;
  };
});