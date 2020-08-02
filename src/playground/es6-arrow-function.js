// babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch

// function square(x) {
//     return x * x ;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x ;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

// const user = {
//     name:'Mike Smith'
// };

// const regular = () => {
//     return user.name.split(' ')[0]
// }
// console.log(regular())

// const arrow = () => user.name.split(' ')[0];
// console.log(arrow())

const multi = {
    number : 5 ,
    numbers : [6,7,8,9,10],
    cal(){
        return this.numbers.map((multiply)=> this.number * multiply
        )
    }
}
console.log(multi.cal())