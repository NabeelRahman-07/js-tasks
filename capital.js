function myFunction(txt){
    let newarr=txt.split(" ");
    let result=[];
    for(let i=0;i<newarr.length;i++){
        let str=newarr[i].charAt(0).toUpperCase()+newarr[i].slice(1);
        result.push(str);
    }
    newarr=result.join(" ");
    console.log(newarr); 
}
myFunction("hi i am nabeel");