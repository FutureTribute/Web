let angApp = angular.module("angApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/page1",
            {
                templateUrl: "views/page1.html",
                controller: "Page1Controller"
            });
        $routeProvider.when("/page2",
            {
                templateUrl: "views/page2.html",
                controller: "Page2Controller"
            });
        $routeProvider.otherwise({redirectTo: "/page1"})
    });
