var wideStocksModule = angular.module( 'wideStocksService', [] );

wideStocksModule.service('wideStocksService', function(){
  this.getData= function(){
    var symbols = [
      {symbol: "KO"},
      {symbol: "CPB"},
      {symbol: "MCD"},
      {symbol: "PEP"},
      {symbol: "HSY"},
      {symbol: "BUD"},
      {symbol: "CL"},
      {symbol: "DEO"},
      {symbol: "SBUX"},
      //{symbol: "BF.B"},
      {symbol: "MKC"},
      {symbol: "SYY"},
      //{symbol: "ABV"},
      //{symbol: "THI"},
      {symbol: "MMM"},
      {symbol: "NKE"},
      {symbol: "PG"},
      {symbol: "LUX"},
      {symbol: "RL"},
      {symbol: "BK"},
      {symbol: "BLK"},
      {symbol: "CME"},
      {symbol: "STT"},
      {symbol: "ADP"},
      {symbol: "PAYX"},
      {symbol: "BEN"},
      {symbol: "AXP"},
      {symbol: "WU"},
      {symbol: "USB"},
      {symbol: "EV"},
      {symbol: "NTRS"},
      {symbol: "SEIC"},
      {symbol: "TROW"},
      {symbol: "EBAY"},
      {symbol: "MA"},
      {symbol: "V"},
      {symbol: "FISV"},
      {symbol: "TSS"},
      {symbol: "BMY"},
      {symbol: "BIIB"},
      {symbol: "LLY"},
      {symbol: "AMGN"},
      {symbol: "GSK"},
      {symbol: "AZN"},
      {symbol: "JNJ"},
      {symbol: "NVS"},
      {symbol: "SRCL"},
      {symbol: "SNY"},
      {symbol: "ZMH"},
      {symbol: "PFE"},
      {symbol: "ISRG"},
      {symbol: "ESRX"},
      {symbol: "AGN"},
      {symbol: "MRK"},
      {symbol: "MDT"},
      {symbol: "SYK"},
      {symbol: "NVO"},
      {symbol: "STJ"},
      {symbol: "CERN"},
      {symbol: "HSIC"},
      {symbol: "BAX"},
      {symbol: "GOOG"},
      {symbol: "AAPL"},
      {symbol: "FB"},
      {symbol: "IBM"},
      {symbol: "INTU"},
      {symbol: "ORCL"},
      {symbol: "MSFT"},
      {symbol: "ADSK"},
      {symbol: "ANSS"},
      {symbol: "LNKD"},
      {symbol: "INTC"},
      {symbol: "CSCO"},
      {symbol: "AMAT"},
      {symbol: "KLAC"},
      {symbol: "MXIM"},
      {symbol: "LLTC"},
      {symbol: "QCOM"},
      {symbol: "COST"},
      {symbol: "WMT"},
      {symbol: "DG"},
      {symbol: "HD"},
      {symbol: "LOW"},
      {symbol: "HOG"},
      {symbol: "EXPD"},
      {symbol: "CHRW"},
      {symbol: "UNP"},
      {symbol: "UPS"},
      {symbol: "LSTR"},
      {symbol: "NOV"},
      {symbol: "COP"},
      {symbol: "XOM"},
      {symbol: "EXC"},
      {symbol: "CMCSA"},
      {symbol: "DIS"},
      {symbol: "TWC"},
      {symbol: "TV"},
      {symbol: "ISCA"},
      //{symbol: "BRK.B"},
      {symbol: "TMK"},
      //{symbol: "MHP"},
      {symbol: "CPLA"},
      {symbol: "WTW"},
      //{symbol: "JW.A"},
      {symbol: "FAST"},
      {symbol: "VMC"},
      {symbol: "MLM"},
      {symbol: "GE"},
      {symbol: "CAT"},
      {symbol: "GGG"},
      {symbol: "WAT"},
      {symbol: "PAC"},
      {symbol: "JOE"},
      {symbol: "CEB"},
      {symbol: "ABCO"},
      {symbol: "DNB"},
      {symbol: "EFX"},
      {symbol: "ICE"},
      {symbol: "MCO"},
      {symbol: "VRSK"},
      {symbol: "CSGP"},
      {symbol: "IHS"},
      {symbol: "MCRS"},
      {symbol: "SLB"},
      {symbol: "LMT"},
      {symbol: "UTX"},
      {symbol: "GD"},
      {symbol: "BTI"},
      {symbol: "PM"},
      {symbol: "MO"},
      {symbol: "LO"},
      {symbol: "MON"},
      {symbol: "POT"},
      {symbol: "CMP"},
      {symbol: "ENB"},
      {symbol: "BWP"},
      {symbol: "BPL"},
      //{symbol: "EPB"},
      {symbol: "SE"},
      {symbol: "SEP"},
      {symbol: "SXL"},
      //{symbol: "KMP"},
      {symbol: "HEP"},
      {symbol: "MMP"},
      {symbol: "OKS"},
      //{symbol: "KMR"},
      {symbol: "KMI"},
      {symbol: "RBA"}
    ];
    return symbols;
  };
});