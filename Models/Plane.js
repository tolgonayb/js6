import Transport from "./Transport";

export class Plane extends Transport {
    #wingspan;
    #height;

    constructor(name, engine, fuelTankVolume, length, wingspan, height) {
        super(name, engine, fuelTankVolume, length);
        this.wingspan = wingspan;
        this.height = height;
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

    get wingspan (){
        return this.#wingspan
    }

    set wingspan (wingspan){
        if (wingspan < 0) {
            console.log("Wingspan ")
        }
    }

    get height () {
        return this.#height
    }

    set height (height) {
        this.#height = height
        console.log(height)

    }

    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +', '+ this.wingspan +', '+ this.height +')';
    }

    makeMove = () => {
        console.log(`${this.name} now is landing in Airport`)
    }

}

