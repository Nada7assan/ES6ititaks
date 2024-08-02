import {Square} from "./square.js";

export class Circle extends Square {
    constructor(x){
        super (x);
    }
    clacArea(){
        return Math.PI * (this.width **2) ;
    };
    parameter(){
        return Math.PI * 2 * this.width;
    };
    toString(){
        return `Circle Area is ${this.clacArea()} and Parameter is ${this.parameter()} `
     };
}
