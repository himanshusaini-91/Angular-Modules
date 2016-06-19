var app= angular.module('myApp',[]);
app.config(['helloWorldProvider',function (helloWorldProvider) {//we have to write providername+Provider keyword
    helloWorldProvider.setName('Reloaded');
}]);
