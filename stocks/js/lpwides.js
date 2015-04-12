var lpwidesModule = angular.module( 'lpwidesService', [] );

lpwidesModule.service('lpwidesService', function(){
  this.getData= function(){
    var symbols = [
      {symbol: "GOOG"},
      {symbol: "BX"},
      {symbol: "MA"},
      {symbol: "AXP"},
      {symbol: "AMGN"},
      {symbol: "PII"},
      {symbol: "ESRX"},
      {symbol: "FOXA"},
      {symbol: "ACT"},
      {symbol: "FAST"},
      {symbol: "GILD"},
      {symbol: "AMGN"},
      {symbol: "VFC"},
      {symbol: "BEN"},
      {symbol: "GWW"},
      {symbol: "MDLZ"},
      {symbol: "BAX"}
    ];
    return symbols;
  };
});
