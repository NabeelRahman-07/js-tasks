
for(let i=1;i<=6;i++){
    let count="";
    for(let j=1;j<i;j++){
        count+=" ";
    }
    for(let j=6;j>=i;j--){
        if(i%2!=0){
            count+="$"
        }else{
            count+="*"    
        }
    }
    console.log(count);
}
