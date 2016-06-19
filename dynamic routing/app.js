/**
 * Created by tanvirsaini32 on 30/05/2016.
 */
var MyApp=angular.module('My',['ngRoute']);
var $routeProviderReference;

MyApp.config(function ($routeProvider) {
    $routeProviderReference = $routeProvider;
});

MyApp.run(['$route', '$http', '$rootScope',

    function ($route, $http, $rootScope) {
        $http.get("../routeData.json").success(function (data) {
            console.log("data",data);//after success data
            alert("i am in ap.js");
            var iLoop = 0, currentRoute;
            for (iLoop = 0; iLoop < data.records.length; iLoop++) {
                currentRoute = data.records[iLoop];
                var routeName = "/" + currentRoute.KeyName;
                console.log("roname"+routeName);
                console.log("pageurl is"+currentRoute.PageUrls);
                console.log("controller is"+currentRoute.Cont);
                $routeProviderReference.when(routeName, {
                    templateUrl: currentRoute.PageUrls,
                    controller:currentRoute.Cont

                });
            }
            $route.reload();
        });
    }]);