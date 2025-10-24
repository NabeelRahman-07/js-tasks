function moveCapital(str){
    let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let capital="";
    let small="";
    for(let i=0;i<str.length;i++){
        if(cap.includes(str[i])){
            capital+=str[i];
        }else{
            small+=str[i]
        }
    }
    console.log(small+capital);
}
moveCapital("hElloWOrld");
moveCapital("JavaScript"); 
moveCapital("PyTHon");