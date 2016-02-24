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
