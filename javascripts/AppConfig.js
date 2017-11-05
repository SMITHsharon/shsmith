app.config(function($routeProvider) {
  $routeProvider
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'PortfolioCtrl'
    })
    .when('/smithExp', {
      templateUrl: 'partials/smithExp.html',
      controller: 'SmithExpCtrl'
    })
    .when('/smithSmarts', {
      templateUrl: 'partials/smithSmarts.html',
      controller: 'SmithSmartsCtrl'
    })

    .otherwise('/portfolio'); // default catch
});