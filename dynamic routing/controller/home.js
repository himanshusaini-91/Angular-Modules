
MyApp.controller("HomeController", ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
        $scope.fnGoToPage = function (args) {
            $location.path('/' + args);
            console.log("after location");
        }
    }
]);