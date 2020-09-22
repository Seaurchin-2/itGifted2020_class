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
const obj2 = {
    host: "psj",
    server_ip: 896745321
}

const {a1, b1} = obj2
console.log(`${a1} || ${b1}`)
// ----------------------------------------------------
function addAsync(a, b, callback){
    setTimeout(() => {
        callback((a+b)/100);
    }, 3000);
}
  
console.log('before');
addAsync(1, 2, function(result){
    console.log(result);
});
console.log('after');