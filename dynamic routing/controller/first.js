
MyApp.controller("First", ['$scope', '$http',
    function ($scope, $http) {
        alert("i am in controller");
        $scope.Message1 = "First page";
    }
]);