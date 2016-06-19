app.controller('MyController', function ($scope,movie) {
   console.log(movie);
    $scope.data=movie.title;
});
