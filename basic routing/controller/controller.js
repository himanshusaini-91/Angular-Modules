app.controller("paymentCtrl",function($scope,$routeParams){
    $scope.data = "Payment Value "+$routeParams.amount;
});
