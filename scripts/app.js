/**
 * @author Khalid Sookia <khalidsookia@gmail.com>
 */
'use strict';

var app = angular.module('app', ['ngRoute']);

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
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'templates/contact.html'
        })
        .when('/friends', {
            controller: 'FriendsController',
            templateUrl: 'templates/friends.html'
        })
        .when('/friend/new', {
            controller: 'FriendsController',
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

app.controller('AppController', ['$scope', function($scope){
}]);

app.controller('AboutController', ['$scope', function($scope){
    console.log('AboutController');
}]);

app.controller('RecruitementController', ['$scope', function($scope){
    console.log('RecruitementController');
}]);

app.controller('QuotationController', ['$scope', function($scope){
    console.log('QuotationController');
}]);

app.controller('ContactController', ['$scope', function($scope){
    console.log('ContactController');
}]);

app.controller('FriendsController', ['$scope', function($scope){
    console.log('FriendsController');
}]);

app.controller('NotFoundController', ['$scope', function($scope){
    console.log('NotFoundController');
}]);

app.controller('TestController', ['$scope', function($scope){
    console.log('TestController');
}]);
