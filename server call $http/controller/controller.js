app.controller("ctrl",['$scope','fact',function($scope,fact)
{
 $scope.c=function(){
     var promise=fact.user($scope);
    promise.then(function(object)
    {console.log("after");
        $scope.obj=object;
        alert("sucess" + object);
    },function(reason)
    {
        alert("error" + reason);

    }

    )
 }

}]);
