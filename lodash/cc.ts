/*declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}

let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);
let count = myLib.numberOfGreetings;*/

interface Test_in {
    getA: () => number
}
class Test implements Test_in{
    private a: number = 2;
    b = 3;
    getA(){
        return this.a;
    }
}

console.log((new Test()).getA())