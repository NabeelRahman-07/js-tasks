function myFunction(txt){
    let newstr="";
    for(let i=(txt.length-1);i>=0;i--){
        newstr+=txt[i];
    }
    console.log(newstr); 
}
myFunction("nabeel");