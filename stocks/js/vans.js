var etfsModule = angular.module( 'etfsService', [] );

etfsModule.service('etfsService', function(){
  this.getData= function(){
    var symbols = [
      {symbol: "VTI"},
      {symbol: "VWO"},
      {symbol: "VNQ"},
      {symbol: "VOO"},
      {symbol: "VEA"},
      {symbol: "VIG"},
      {symbol: "VTV"},
      {symbol: "VUG"},
      {symbol: "VEU"},
      {symbol: "VGK"},
      {symbol: "VV"},
      {symbol: "VO"},
      {symbol: "VB"},
      {symbol: "VGT"},
      {symbol: "VYM"},
      {symbol: "VCSH"},
      {symbol: "VBR"},
      {symbol: "VCIT"},
      {symbol: "BIV"},
      {symbol: "BSV"},
      {symbol: "BND"},
      {symbol: "VHT"}
    ];
    return symbols;
  };
});