import Transport from "./Models/Transport";
import {Car} from "./Models/Car";
import {Ship} from "./Models/Ship";
import {Plane} from "./Models/Plane";


new Transport('', '', '')
const bugatti = new Car( 'Bugatti La Voiture Noire', 'quad-turbo', 100, 4.62)
const aquila36 = new Ship('Aquila36 Sport','mercury-verado', 1350,10.96)
const boeing787 = new Plane('Boeing787-10','gas-turbine', 126200, 56.7)

bugatti.wheels = 4
bugatti.engineDisplacement = 8.0

aquila36.displacement = 6700
aquila36.waterTankVolume = 200

boeing787.wingspan = 60.17
boeing787.height = 17

console.log(Object.keys(bugatti))
console.log(bugatti.toString())

console.log(Object.keys(aquila36))
console.log(aquila36.toString())

console.log(Object.keys(boeing787))
console.log(boeing787.toString())

boeing787.makeMove()
bugatti.getAround()
aquila36.callAt()