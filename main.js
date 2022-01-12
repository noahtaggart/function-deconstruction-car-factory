const addBody = (chassisObject) => {
    // Use dot notation to add a new property
    chassisObject.body = "Fever"

    // Return the chassis that now has a body property on it
    return chassisObject
}

const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {  }

    return newChassisObject
}

let chassis = createChassis()
console.log(chassis)
/*
	Note in the code below that the object that gets returned from the
	makeChassis() function above is stored in the chassis variable. That
	value is then sent to the addBody() function as that function's input.
*/
let chassisWithBody = addBody(chassis)

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

let chassisWithWheels = addWheels(chassis)

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

let chassisWithEngine = addEngine(chassis)

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = 'Tilting'
    return chassisObject
}

let chassisWithSteeringWheel = addSteeringWheel(chassis)

const addDriveTrain = (chassisObject) => {
    chassisObject.DriveTrain = 'Two wheel drive'
    return chassisObject
}

let chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassis)