
// fetching data using 'async' and 'await'


async function catFact(){
    try{
        let txt = await fetch("https://catfact.ninja/fact");
        let fact= await txt.json();
        console.log(fact);  
    }
    catch(error){
        console.log(error);
        
    }     
}

catFact();