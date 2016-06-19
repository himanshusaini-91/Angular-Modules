/**
 * Created by tanvirsaini32 on 19/06/2016.
 */
app.controller("my",['$scope','helloWorld',function($scope,helloWorld)

{
    $scope.hellos =helloWorld.sayHello();


}]);
