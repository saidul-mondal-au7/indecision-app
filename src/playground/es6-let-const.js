// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

var nameVar = 'Saidul';
var nameVar = 'Mondal';
console.log('nameVar', nameVar)

let nameLet = 'Jan';
nameLet = 'July';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst',nameConst)

function getPetName() {
    const petName = 'Hal';
    return petName
}

const petName = getPetName()
console.log(petName)