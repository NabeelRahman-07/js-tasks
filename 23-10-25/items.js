function mostSoldItem(obj){
    let count=0;
    let result="";
    for(let i in obj){
        if(count<obj[i]){
            count=obj[i];
            result=i;
        }
    }
    console.log(result);
    
}
mostSoldItem( {shoes: 120, shirts: 90, pants: 150, hats: 75} ) ;
mostSoldItem( { phones: 300, laptops: 450, tablets: 250, watches: 100} );
mostSoldItem( {pens: 500, pencils: 499, erasers: 300});