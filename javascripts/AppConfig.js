app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
 //   .when('/smithApps', {
 //     templateUrl: 'partials/smithApps.html',
 //     controller: 'SmithAppsCtrl'
 //   })
    .when('/smithExp', {
      templateUrl: 'partials/smithExp.html',
      controller: 'SmithExpCtrl'
    })

    .otherwise('/home'); // default catch
});