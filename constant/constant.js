/**
 * Created by tanvirsaini32 on 19/06/2016.
 */
var app = angular.module('app', []);

app.constant('movieTitle', 'The Matrix');

app.run(function()
{
    alert(" i am in run");// first statement it is like main function in other language;
});


app.controller('MyController', function ($scope,movieTitle) {
    $scope.data=movieTitle;

});
