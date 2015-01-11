var headlinesModule = angular.module( 'headlinesService', [] );

headlinesModule.service('headlinesService', function($http, $q) {

  var headlines = [];

  this.refreshHeadlines = function(event, symbol) {

    var deferred = $q.defer();
    var that = this;

    this.refreshHeadlinesList(event, symbol)
      .then(function(result) {
        // Save the Headline symbols to local storage
        that.saveHeadlineSymbols();
        deferred.resolve(headlines);
      });

    return deferred.promise;

  } // end refreshHeadlines

  this.refreshHeadlinesList = function(event, symbol) {

    var deferred = $q.defer();

    if (event.target.checked) {
      // checking, add headlines for the symbol
      this.getHeadlinesData(symbol)
        .then(function(newHeadlines) {
          headlines = newHeadlines.concat(headlines);
          deferred.resolve('headlines added');
        });
    } else {
      // unchecking, remove headlines for the symbol
      for (var index = headlines.length - 1; index >= 0; index--) {
        var headline = headlines[index];
        if (headline.symbol == symbol) {
          headlines.splice(index, 1);
        }
      }
      deferred.resolve('headlines removed');
    }

    return deferred.promise;

  } // end refreshHeadlinesList

  this.saveHeadlineSymbols = function() {
    //var myArray = myString.split(',');
    var symbols = [];
    for (var index = 1; index < headlines.length; index++) {
      symbols[symbols.length] = headlines[index].symbol;
    }
    symbols = symbols.unique();
    localStorage.setItem("gmercer:stocks:headlines:symbols", symbols.join());
  } // end saveHeadlineSymbols

  this.getHeadlinesData = function(symbol) {

    var SELECT_HEADLINE_QUERY_PART1 =
      "q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D";
    var SELECT_HEADLINE_QUERY_PART2 =
      "'%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa'";

    var url = YAHOO_QUERYAPI_URL +
      SELECT_HEADLINE_QUERY_PART1 + symbol + SELECT_HEADLINE_QUERY_PART2 +
      QUERY_PROPERTIES;

    return $http.jsonp(url).then(function (response) {
      var headlines = [];
      if (response.status == 200 && response.data.query.results) {
        var results = response.data.query.results.a;
        for (var index = 0; index < results.length; index++) {
          headlines[headlines.length] = {
            symbol: symbol,
            content: results[index].content,
            href: results[index].href
          }
        }
      }
      return headlines;
    });
  } // end getHeadlinesData

});