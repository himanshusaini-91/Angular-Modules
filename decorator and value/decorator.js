/**
 * Created by tanvirsaini32 on 19/06/2016.
 */
var app = angular.module('app', []);

app.value('movieTitle', 'The Matrix');

app.run(function()
{
   alert(" i am in run");// first statement it is like main function in other language;
});
app.config(function ($provide) {
    $provide.decorator('movieTitle', function ($delegate) {//it contain the matrix
        console.log($delegate);
        return $delegate + ' - starring Keanu Reeves';
    });
});

app.controller('MyController', function ($scope,movieTitle) {
    $scope.data=movieTitle;
});
