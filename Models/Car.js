import Transport from "./Transport";

export class Car extends Transport {
    #wheels;
    #engineDisplacement;

    constructor(name, engine, fuelTankVolume, length, wheels, engineDisplacement) {
        super(name, engine, fuelTankVolume, length);
        this.wheels = wheels;
        this.engineDisplacement = engineDisplacement
    }

    get fuelTankVolume() {
        return super.fuelTankVolume;
    }

    set fuelTankVolume(value) {
        super.fuelTankVolume = value;
    }

    get length() {
        return super.length;
    }

    set length(value) {
        super.length = value;
    }

    get wheels (){
        return this.#wheels
    }

    set wheels (value) {
        if (value < 0) {
            console.log("Car can't have negative number of wheels")
        }
    }

    get engineDisplacement (){
        return this.#engineDisplacement
    }

    set engineDisplacement (engineDisplacement){
        if (engineDisplacement <0) {
            console.log(engineDisplacement)
        }
    }

    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +', '+ this.wheels +', '+ this.engineDisplacement +')';
    }

    getAround = () => {
        console.log(`With ${this.engineDisplacement} Bugatti's engine displacement you'll always like get around the city `)
    }

}
