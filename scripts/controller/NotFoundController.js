app.controller('NotFoundController', ['$scope', function($scope){
    console.log('NotFoundController');
    $scope.color = 'violet';
    $scope.title = 'Ooops... Je ne trouve pas cette page'
}]);
