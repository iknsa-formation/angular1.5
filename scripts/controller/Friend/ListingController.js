app.controller('FriendListingController', ['$scope', 'FriendsFactory', function($scope, FriendsFactory){
    console.log('FriendListingController');

    $scope.color = 'vert';
    $scope.title = 'Vous êtes sur la page des amis';

    $scope.index = function() {
        var friends = FriendsFactory.index();
    };

    $scope.index();
}]);
