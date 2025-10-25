//sample program to show how recursion works.
//program to find factorial of a number.

 function myfunc(num){
    if(num===1 || num===0){
        return num;
    }
    return num * myfunc(num-1); //recursive call.
 }
 console.log(myfunc(5));

 

 //Tail recursion:- it is a form of recursion whre recursive call will be the last operation on function.
 //Example for tail recursion with same problem above:-

 function myfunc(num,total=1){
    if(num===1 || num===0){
        return total;
    }
    return myfunc(num-1,num*total);
 }
 console.log(myfunc(5));

