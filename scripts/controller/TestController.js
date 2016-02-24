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
