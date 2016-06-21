app.controller("ctrl",["$scope",function($scope)
{
    $scope.data=" i am ctrl controller";
}]);
app1.controller("ctrl1",["$scope",function($scope)
    {
        $scope.data=" i am ctrl1 controller";
    }

]);
app2.controller("ctrl2",["$scope",function($scope)
    {
        $scope.data=" i am ctrl2 controller";
    }

]);
window.addEventListener("load",function()
{
    angular.bootstrap(document.getElementById("div1"),['myapp']);//injecting angular module when window is load
    angular.bootstrap(document.getElementById("div2"),['myapp1']);
    angular.bootstrap(document.getElementById("div3"),['myapp2']);
});
