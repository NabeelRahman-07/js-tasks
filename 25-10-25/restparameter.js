//Sample program with rest parameter.
//Multiplying every elemnt of rust parameters with the sum of firt two parameters.

 function myFunc(a,b,...n){ //'...n' is the rest parameter.
    for(let num of n){
        let out=num*(a+b);
        console.log(out);  
    }
 }
 myFunc(2,3,10,20,30,40,50,60,70);


