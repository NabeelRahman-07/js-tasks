//simple example of class and how we can create objects using class.


class car{
    constructor(company,name,model){
        this.Brand=company;
        this.Name=name;
        this.Model=model;
    }
    drive(){
        console.log("The car is:",this.Brand,this.Name);
        
    }
}

let c1=new car("Porsche","911 Carrera",2024);
let c2=new car("Toyota","corolla Altis",2018);
console.log(c1);
console.log(c2.drive());
