import Transport from "./Transport";

export class Ship extends Transport {
    #displacement;
    #waterTankVolume;


    constructor(name, engine, fuelTankVolume, length, displacement, waterTankVolume) {
        super(name, engine, fuelTankVolume, length);
        this.displacement = displacement;
        this.waterTankVolume = waterTankVolume;
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

    get displacement (){
        return this.#displacement
    }

    set displacement (value){
        if (value < 0) {
            console.log("Displacement value can't be < 0")
        }
    }

    get waterTankVolume () {
        return this.#waterTankVolume
    }

    set waterTankVolume (waterTankVolume) {
        this.#waterTankVolume = waterTankVolume
        console.log(waterTankVolume)
    }


    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +', '+ this.displacement +', '+ this.waterTankVolume +')';
    }

    callAt = () => {
        console.log(`${this.name} cruise ship will call at several ports`)
    }


}

