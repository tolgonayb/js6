import Transport from "./Transport";

export class Plane extends Transport {
    wingspan;
    height;

    constructor(name, engine, fuelTankVolume, length, wingspan, height) {
        super(name, engine, fuelTankVolume, length);
        this.wingspan = wingspan;
        this.height = height;
    }

    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +', '+ this.wingspan +', '+ this.height +')';
    }

    makeMove = () => {
        console.log(`${this.name} now is landing in Airport`)
    }
}

