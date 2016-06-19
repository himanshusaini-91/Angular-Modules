var app=angular.module("myapp",['ngRoute'])
app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'view/home.html',
        }).when('/about',
    {
        templateUrl:"view/about.html"
    }).when('/payment/:amount',
    {
        templateUrl:"view/payment.html/",
            controller:'paymentCtrl'
    }).when('/contact',
    {
        templateUrl:"view/contact.html"
    })
        .otherwise({
            redirectTo: '/'
        });

});
