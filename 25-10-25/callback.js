//program to show how callback functions work
//Arithmatic operation on 2 numbers

function myFunc(a,b,fn){ //'fn' is the callback function.
    return fn(a,b);
}
    function add(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function mul(a,b){
        return a*b;
    }
    function div(a,b){
        return a/b;
    }

console.log(myFunc(20,10,add));
console.log(myFunc(20,10,sub));
console.log(myFunc(20,10,mul));
console.log(myFunc(20,10,div));


