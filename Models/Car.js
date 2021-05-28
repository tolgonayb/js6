import Transport from "./Transport";

export class Car extends Transport {
    wheels;
    engineDisplacement;

    constructor(name, engine, fuelTankVolume, length, wheels, engineDisplacement) {
        super(name, engine, fuelTankVolume, length);
        this.wheels = wheels;
        this.engineDisplacement = engineDisplacement
    }
    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +', '+ this.wheels +', '+ this.engineDisplacement +')';
    }

    getAround = () => {
        console.log(`With ${this.engineDisplacement} Bugatti's engine displacement you'll always like get around the city `)
    }
}
