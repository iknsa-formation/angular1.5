/**
 * @author Khalid Sookia <khalidsookia@gmail.com>
 */

/**
* app Module
*/
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

app.directive('maDirective', function() {

  return {

    restrict: 'EA',

    template: '<p>My new directive</p>'

  }



});

app.controller('AppController', ['$scope', function($scope){
    console.log('AppController');
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

app.controller('FriendsController', ['$scope', function($scope){
    console.log('FriendsController');
}]);

app.controller('NotFoundController', ['$scope', function($scope){
    console.log('NotFoundController');
}]);

app.controller('TestController', ['$scope', function($scope){
    console.log('TestController');

    $scope.who = ' tu';
    $scope.what = ' vas bien? ';

    // Scope events
    $scope.$on('evt', function (evt, msg) {
        console.log('Reçu dans parent : ' + msg);
        $scope.messageAuxDescendants = msg + 'Renvoyé';
    });

    $scope.$broadcast('evt', 'Message aux descendants de TestController');

    // Scope listner
    $scope.country = "United States";
    $scope.$watch('country === "France"', function(newValue, oldValue) {
        if(newValue) {
            $scope.country = "FR";
        }
    });
}]);

app.controller('ChildController', ['$scope', function($scope){
    console.log('ChildController');
    $scope.what = ' bien ou bienne? ';

    // Scope events
    $scope.$on('evt', function (evt, msg) {
        console.log('Reçu dans ChildController : ' + msg);
    });
}]);

app.controller('GrandChildController', ['$scope', function($scope){
    console.log('GrandChildController');

    $scope.who = ' Noemie';
    $scope.what = ' tu vas bien?';

    // Scope events
    $scope.$emit('evt', 'Message aux parents de GrandChildController');
    $scope.$on('evt', function (evt, msg) {
        console.log('Reçu dans GrandChildController : ' + msg);
    });
}]);
