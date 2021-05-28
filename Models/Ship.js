import Transport from "./Transport";

export class Ship extends Transport {
    displacement;
    waterTankVolume;


    constructor(name, engine, fuelTankVolume, length, displacement, waterTankVolume) {
        super(name, engine, fuelTankVolume, length);
        this.displacement = displacement;
        this.waterTankVolume = waterTankVolume;
    }

    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +', '+ this.displacement +', '+ this.waterTankVolume +')';
    }

    callAt = () => {
        console.log(`${this.name} cruise ship will call at several ports`)
    }
}

