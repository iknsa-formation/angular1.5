app.controller('NewController', ['$scope', '$routeParams', 'FriendsFactory', function($scope, $routeParams, FriendsFactory){
    console.log('NewController');
    $scope.color = 'vert';
    $scope.title = 'Vous êtes sur la page des amis';
    $scope.newTitle = 'Vous êtes sur la page de d\'ajout d\'un ami'
    var param = $routeParams.param;

    $scope.index = function(friend) {
        FriendsFactory.index();
    };

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
