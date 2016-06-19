app.controller("ctrl",['$scope','Myfactory',function($scope,Myfactory)
{
$scope.result=0;
    console.log(Myfactory);
    console.log($scope.second);
   /* $scope.add=function()
    {
        $scope.result= Myfactory($scope.firstno,$scope.second)
    }*/
    Myfactory["add"]();
    $scope.add=function(){
        alert("i am in add");
        console.log(typeof $scope.firstno);
        $scope.result= Myfactory.add($scope.firstno,$scope.second);
    };
    Myfactory["sub"]();
    $scope.sub=function(){
        $scope.result=  Myfactory.sub($scope.firstno,$scope.second);
    };
    Myfactory["mul"]();
    $scope.mul=function(){
        $scope.result= Myfactory.mul($scope.firstno,$scope.second);
    };
    Myfactory["div"]();
    $scope.div=function(){
        $scope.result= Myfactory.div($scope.firstno,$scope.second);
    };
}]);
