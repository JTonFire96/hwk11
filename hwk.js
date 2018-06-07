class kite {
    constructor( name, style){
        this._name= name;
        this._style = style;
        this._height = 0;
        this._speed= 0;
        this._wind = 10;


    }
    get name(){
       
        console.log(`You chose ${this._name}. An excellent choice.`);
        return this._name;
    }
    get style(){
       
        console.log(` You chose a ${this._style} kite.`);
        return this._style
    }
    run(incSpeed, incHi){
        this._speed+= incSpeed;
        this._height+= incHi;
        console.log(`Because you ran the  height has been increaed to ${this._height}`);

    }
    gust(incWind, incHi){
        this._wind += incWind;
        this._height += incHi;
        console.log(`A strong wind hits your kite! Your height is ${this._height} `);

    }
}

var jetKite = new kite ("Jet","2-String");
console.log(jetKite.name);
console.log(jetKite.style);
jetKite.run(5,15);
jetKite.gust(3,3);


