function myFunction(num){
    let minimum=num[0];
    let maximum=0;
    for(let i=0;i<num.length;i++){
        if(num[i]>maximum){
            maximum=num[i];
        }
        if(minimum>num[i]){
            minimum=num[i]
        }
    }
    console.log("maximum:",maximum," ","minimum:",minimum); 
}
myFunction([2,5,7,1,13,8,9]);