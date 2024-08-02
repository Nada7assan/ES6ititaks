
import {Rectangle} from "./rectangle.js";

export class Square extends Rectangle {
    constructor(x){
     super (x);
    }
    clacArea(){
        return this.width **2 ;
    };
    parameter(){
        return this.width * 4 ;
    };
    toString(){
        return `Square Area is ${this.clacArea()} and Parameter is ${this.parameter()} `
     };
}