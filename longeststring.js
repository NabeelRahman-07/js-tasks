function myFunction(arr){
    let longest="";
    for(let i=0;i<arr.length;i++){
        if(longest.length<arr[i].length){
            longest=arr[i];
        }
    }
    console.log(longest);  
}
myFunction(["hi","nabeel","am","I"]);