export default class Transport {

    engine;
    #fuelTankVolume;
    #length;

    constructor(name, engine, fuelTankVolume, length) {
        this.name = name;
        this.engine = engine;
        this.fuelTankVolume = fuelTankVolume;
        this.length = length;

    }
    get fuelTankVolume () {
        return this.#fuelTankVolume;
    }
    set fuelTankVolume (value) {
        if(value < 0) {
            console.log("Fuel Tank Volume can't be negative")
        }
    }

    get length () {
        return this.#length;
    }

    set length (value) {
        if (value < 0){
            console.log("There's no length")
        }
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
