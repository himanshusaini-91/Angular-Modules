app.controller("ctrl",function($scope)
{
/*$scope.d=function(){
    alert("in d");
    var c=$scope.strength;
    $scope.res=c;
    console.log("this is res",$scope.res);*/
//};

});
app.directive('cPass',function()

{ return{
    restrict:'A',
    link:function(scope,element,attrs)
    {
        console.log("ele",element.attrs+'scope',scope+'attrs'+ attrs);
        scope.$watch(attrs.cPass, function (value) {
            console.log(value);
            if(angular.isDefined(value)){
                if (value.length > 8) {
                    scope.strength = 'strong';
                } else if (value.length > 3) {
                    scope.strength = 'medium';
                } else {
                    scope.strength = 'weak';
                }
            }
        });
    }
};
});
