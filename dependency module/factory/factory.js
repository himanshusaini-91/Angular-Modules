app2.factory("fact",function()
{
    var x=function(value)
    { console.log(value);
        return value;
    }
    return x;
});
