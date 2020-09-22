const obj1 = {
    number: 8888,
    id: "sampleobj01",
    printInfo(){
        console.log("Object Number: ", this.number);
        console.log(`Object Id: ${this.id}`);
    }
}

obj1.printInfo();