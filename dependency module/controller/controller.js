
app.controller("ctrl",['$scope','fact',function($scope,fact)
{ console.log(fact);
    $scope.c=function()
    { alert("i am in c");
        var value=$scope.abc;
        $scope.result=fact(value);
    }


}]);
