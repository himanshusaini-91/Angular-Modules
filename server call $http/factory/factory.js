app.factory("fact",function($http,$q)
{
    return{user:function(scope){
            var object;
            var defered=$q.defer();
        $http.get('../server call $http/factory/power.json').success(function(data) {
                console.log(data.name,data.country,data.dob);
            object=data;
            defered.resolve(object);
        }).error(function(error)
            {
                object=error;
             console.log("data is error ");
                defered.reject(object);
            });
        return defered.promise ;
        }
    }


});
