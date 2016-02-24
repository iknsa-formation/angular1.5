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
    $scope.color = 'rouge';
    $scope.title = 'Vous êtes sur la page d\'accueil';
}]);

app.controller('AboutController', ['$scope', function($scope){
    console.log('AboutController');
    $scope.color = 'bleu';
    $scope.title = 'Vous êtes sur la page a porpos';
}]);

app.controller('RecruitementController', ['$scope', function($scope){
    console.log('RecruitementController');
    $scope.color = 'jaune';
    $scope.title = 'Vous êtes sur la page de recrutement';
}]);

app.controller('QuotationController', ['$scope', function($scope){
    console.log('QuotationController');
    $scope.color = 'violet';
    $scope.title = 'Vous êtes sur la page de devis';
}]);

app.controller('FriendsController', ['$scope', function($scope){
    console.log('FriendsController');
    $scope.color = 'vert';
    $scope.title = 'Vous êtes sur la page des amis';
    $scope.newTitle = 'Vous êtes sur la page de d\'ajout d\'un ami'

    // New friends submit method
    $scope.new = function(friend) {
        console.log(friend);
    };
    $scope.reset = function(newFriendForm) {
        $scope.friend = {};
        newFriendForm.$setPristine();
        newFriendForm.$setUntouched();
    };
}]);

app.controller('NotFoundController', ['$scope', function($scope){
    console.log('NotFoundController');
    $scope.color = 'violet';
    $scope.title = 'Ooops... Je ne trouve pas cette page'
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
