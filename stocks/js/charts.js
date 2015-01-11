var chartsModule = angular.module( 'chartsService', [] );

chartsModule.service('chartsService', function($http, $q) {

  var charts = [];

  this.refreshCharts = function(event, symbol, isFund) {

    var deferred = $q.defer();
    var that = this;

    this.refreshChartsList(event, symbol, isFund)
      .then(function(result) {
        deferred.resolve(charts);
      });

    return deferred.promise;

  } // end refreshCharts

  this.refreshChartsList = function(event, symbol, isFund) {

    var deferred = $q.defer();

    if (event.target.checked) {
      // checking, add charts for the symbol
      this.getChartsData(symbol,isFund)
        .then(function(newCharts) {
          charts = newCharts.concat(charts);
          deferred.resolve('charts added');
        });
    } else {
      // unchecking, remove charts for the symbol
      for (var index = charts.length - 1; index >= 0; index--) {
        var chart = charts[index];
        if (chart.symbol == symbol) {
          charts.splice(index, 1);
        }
      }
      deferred.resolve('charts removed');
    }

    return deferred.promise;

  } // end refreshChartsList

  this.getChartsData = function(symbol, isFund) {

    // get 'printer-friendly version of this page'
    // http://www.marketwatch.com/investing/stock/ibm/charts?symb=IBM&countrycode=US&time=8&startdate=1%2F4%2F1999&enddate=1%2F10%2F2015&freq=1&compidx=none&compind=none&comptemptext=Enter+Symbol%28s%29&comp=none&uf=0&ma=1&maval=200&lf=1&lf2=16777216&lf3=33554432&type=2&size=2&style=1013

    var SELECT_QUERY_PART1 =
      "q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.marketwatch.com%2Finvesting%2Fstock%2F";
    var SELECT_QUERY_PART2 =
      "%2Fprintchart%3Fsymb%3D";
    var SELECT_QUERY_PART3 =
      "%26countrycode%3DUS%26time%3D8%26startdate%3D1%252F4%252F1999%26enddate%3D1%252F10%252F2015%26freq%3D1%26compidx%3Dnone%26compind%3Dnone%26comptemptext%3DEnter%2BSymbol%2528s%2529%26comp%3Dnone%26uf%3D0%26ma%3D1%26maval%3D200%26lf%3D1%26lf2%3D16777216%26lf3%3D33554432%26type%3D2%26size%3D2%26style%3D1013'%20&format=json&diagnostics=true&callback=";

    // Funds/Etfs have a slightly different query
    if (isFund) {
      SELECT_QUERY_PART1 =
        "q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.marketwatch.com%2Finvesting%2Ffund%2F";
      SELECT_QUERY_PART2 =
        "%2Fprintchart%3Fsymb%3D";
      SELECT_QUERY_PART3 =
        "%26countrycode%3DUS%26time%3D8%26startdate%3D1%252F4%252F1999%26enddate%3D1%252F10%252F2015%26freq%3D1%26compidx%3Dnone%26compind%3Dnone%26comptemptext%3DEnter%2BSymbol%2528s%2529%26comp%3Dnone%26uf%3D0%26ma%3D1%26maval%3D200%26lf%3D1%26lf2%3D512%26lf3%3D33554432%26type%3D2%26size%3D2%26style%3D1013'%20&format=json&diagnostics=true&callback=";
    }

    var url = YAHOO_QUERYAPI_URL +
      SELECT_QUERY_PART1 + symbol + SELECT_QUERY_PART2 + symbol + SELECT_QUERY_PART3
      QUERY_PROPERTIES;

    return $http.get(url).then(function (response) {
      var charts = [];
      if (response.status == 200) {
        console.log(response.data.query.results);
        var results = response.data.query.results;
        charts[charts.length] = {
          symbol: symbol,
          src: results.body.div.img.src
        }
      }
      return charts;
    });
  } // end getChartsData

});