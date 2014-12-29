var headlinesModule = angular.module( 'headlinesService', [] );

headlinesModule.service('headlinesService', function() {

  $scope.refreshHeadlines = function(event, symbol) {
    $scope.refreshHeadlinesList(event, symbol)
      .then(function(result) {
        // Save the Headline symbols to local storage
        $scope.saveHeadlineSymbols();
      });
  } // end refreshHeadlines

  $scope.refreshHeadlinesList = function(event, symbol) {

    var deferred = $q.defer();

    if (event.target.checked) {
      // checking, add headlines for the symbol
      $scope.getHeadlinesData(symbol)
        .then(function(headlines) {
          $scope.headlines = headlines.concat($scope.headlines);
          deferred.resolve('headlines added');
        });
    } else {
      // unchecking, remove headlines for the symbol
      for (var index = $scope.headlines.length - 1; index >= 0; index--) {
        var headline = $scope.headlines[index];
        if (headline.symbol == symbol) {
          $scope.headlines.splice(index, 1);
        }
      }
      deferred.resolve('headlines removed');
    }

    return deferred.promise;

  } // end refreshHeadlinesList

  $scope.saveHeadlineSymbols = function() {
    //var myArray = myString.split(',');
    var symbols = [];
    for (var index = 1; index < $scope.headlines.length; index++) {
      symbols[symbols.length] = $scope.headlines[index].symbol;
    }
    symbols = symbols.unique();
    localStorage.setItem("gmercer:stocks:headlines:symbols", symbols.join());
  } // end saveHeadlineSymbols

  $scope.getHeadlinesData = function(symbol) {

    var SELECT_HEADLINE_QUERY_PART1 =
      "q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D";
    var SELECT_HEADLINE_QUERY_PART2 =
      "'%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa'";

    var url = YAHOO_QUERYAPI_URL +
      SELECT_HEADLINE_QUERY_PART1 + symbol + SELECT_HEADLINE_QUERY_PART2 +
      QUERY_PROPERTIES;

    return $http.jsonp(url).then(function (response) {
      var headlines = [];
      if (response.status == 200) {
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