export default class Transport {

    engine;
    fuelTankVolume;
    length;

    constructor(name, engine, fuelTankVolume, length) {
        this.name = name;
        this.engine = engine;
        this.fuelTankVolume = fuelTankVolume;
        this.length = length;

    }

    toString() {
        return '(' + this.name + ', ' + this.engine + ', '+  this.fuelTankVolume + ', '+ this.length +')';
    }

    makeMove = () => {
        console.log("Some Transport is made move")
    }

    getAround = () => {
        console.log("The best way to get around the city")
    }

    callAt = () => {
        console.log("The ship called at one port")
    }
}

