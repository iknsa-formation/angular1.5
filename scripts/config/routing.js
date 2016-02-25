app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'AppController',
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            controller: 'AboutController',
            templateUrl: 'templates/about.html'
        })
        .when('/recruitement', {
            controller: 'RecruitementController',
            templateUrl: 'templates/recruitement.html'
        })
        .when('/quotation', {
            controller: 'QuotationController',
            templateUrl: 'templates/quotation.html'
        })
        .when('/friend', {
            controller: 'ListingController',
            templateUrl: 'templates/friends.html'
        })
        .when('/friend/new', {
            controller: 'NewController',
            templateUrl: 'templates/friend-new.html'
        })
        .when('/404', {
            controller: 'NotFoundController',
            templateUrl: 'templates/404.html'
        })
        .when('/test', {
            controller: 'TestController',
            templateUrl: 'templates/test.html'
        })
        .otherwise({redirectTo: '/404'})
        ;
});
