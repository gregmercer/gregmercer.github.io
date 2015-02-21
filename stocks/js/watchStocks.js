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
      {symbol: "CSGP"},
      {symbol: "ALGN"},
      {symbol: "ESRX"},
      {symbol: "MSCI"},
      {symbol: "EXPD"},
      {symbol: "FAST"},
      {symbol: "MSCI"},
      {symbol: "CHRW"},
      {symbol: "JKHY"},
      {symbol: "V"},
      {symbol: "MA"},
      {symbol: "IBM"}
    ];
    return symbols;
  };
});
