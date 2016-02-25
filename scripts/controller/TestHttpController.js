app.controller('TestHttpController', ['$scope', '$http', function($scope, $http){

    $http({
        method: 'GET',
        url: 'http://localhost/angular/scripts/datas/friends.js'
    })
    .then(function successCallback(response) {
        $scope.ok = response.data;
    }, function errorCallback(response) {
        $scope.notOk = response;
    });
}]);
