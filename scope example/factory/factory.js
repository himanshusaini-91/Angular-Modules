app.factory("Myfactory",function(){

    var obj={

        add:function(x,y){
            return parseInt(x) + parseInt(y);
        },
        sub:function (x,y){
            return x - y;
        },
        mul:function (x,y){
            return x * y;
        },
        div:function (x,y){
            return x / y;
        }


    }
    /*var obj=function(x,y){
        return parseInt(x) + parseInt(y)
    }
    return obj;*/
})
