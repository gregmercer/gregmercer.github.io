var watchModule = angular.module( 'watchStocksService', [] );

watchModule.service('watchStocksService', function(){
  this.getData= function(){
    var symbols = [
      {symbol: "AAPL"},
      {symbol: "GOOG"},
      {symbol: "ORCL"},
      {symbol: "DVA"},
      {symbol: "NOV"},
      {symbol: "SLB"},
      {symbol: "HIBB"},
      {symbol: "GILD"},
      {symbol: "FLR"},
      {symbol: "SLAB"},
      {symbol: "ATML"},
      {symbol: "ANSS"},
      {symbol: "ZTS"},
      {symbol: "IBM"}
    ];
    return symbols;
  };
});
