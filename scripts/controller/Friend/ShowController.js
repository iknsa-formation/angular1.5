app.controller('FriendShowController', ['$scope', '$routeParams', 'FriendsFactory', function($scope, $routeParams, FriendsFactory){
    console.log('FriendShowController');

    $scope.color = 'rouge';
    $scope.title = 'Vous êtes sur la page d\'un ami';

    FriendsFactory.show($routeParams.id);
}]);
