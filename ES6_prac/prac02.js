const { Console } = require("console");

const obj1 = {
    number: 8888,
    id: "sampleobj01",
    printInfo(){
        console.log("Object Number: ", this.number);
        console.log(`Object Id: ${this.id}`);
    }
}
obj1.printInfo();
// ----------------------------------------------------
let newF = (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    console.log(`${num1} - ${num2} = ${num1-num2}`);
    console.log(`${num1} * ${num2} = ${num1*num2}`);
    console.log(`${num1} / ${num2} = ${num1/num2}`);
}
newF(2, 8);
// ----------------------------------------------------
