const Tom = {
    fullName: "Tom",
    age: 2,
    getInfo: function(){
       console.log(this.fullName,this.age);
    },

    logName(){
        console.log(_fullName)
    },
    logAge(){
        console.log(_age)
    }
}

console.log(Tom.fullName);
Tom.getInfo();


class Animal {
    constructor(fullName,age){
        this._fullName =`Ten:${fullName}`;
        this._age = `Tuoi:${age}`

    }
}
class Cat extends Animal{
    constructor(fullName,age,color){
        super(fullName,age)
        this._color = color;
    }
}
let doremon = new Animal("Hoang","21");
let Anime = new Animal("Duy","34");
console.log(doremon._fullName);
console.log(doremon._age);
let catCanada = new Cat("Meo may","12","red");
console.log(catCanada)