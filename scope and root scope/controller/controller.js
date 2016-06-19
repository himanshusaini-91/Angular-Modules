app.controller("rctrl",['$rootScope','$scope','fact',function($rootScope,$scope,fact)
{ console.log(fact);
     $rootScope.x=function()
    {  alert("i am in x");
        console.log($scope.sp);
        $rootScope.result= fact($scope.sp);
        console.log($rootScope.result);
    }

}]);
    app.controller("c1",['$scope',function($scope)
    {
        var clickc1=function(){
            alert("i am in c1");
            console.log($scope.result);
        }

    }]);
app.controller("c2",['$scope',function($scope)
{ var click2=function()
{
    console.log($scope.result);
}

}]);
