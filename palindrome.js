function myFunction(num){
    let newstr=num.toString();
    let reversed=newstr.split("").reverse().join("");
    if(newstr==reversed){
        console.log("number is palindrome");
    }else{
        console.log("number is not palindrome");  
    }
}
myFunction(1231)