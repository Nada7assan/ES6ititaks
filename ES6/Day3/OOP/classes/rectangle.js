import {Shape} from "./shape.js";

export class Rectangle extends Shape {
    constructor(x,y=0){
        super (x);
        this.height = y;
    }
    clacArea(){
        return this.width * this.height;
    };
    parameter(){
        return 2 * (this.width + this.height);
    };
    toString(){
       return `Rectangle Area is ${this.clacArea()} and Parameter is ${this.parameter()} `
    };
    }