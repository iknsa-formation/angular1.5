app.controller('FriendNewController', ['$scope', 'FriendsFactory', function($scope, FriendsFactory){
    console.log('FriendNewController');
    $scope.color = 'violet';
    $scope.title = 'Vous êtes sur la page de d\'ajout d\'un ami'

    // New friends submit method
    $scope.new = function(friend) {
        FriendsFactory.new(friend);
    };

    $scope.reset = function(newFriendForm) {
        $scope.friend = {};
        newFriendForm.$setPristine();
        newFriendForm.$setUntouched();
    };
}]);
