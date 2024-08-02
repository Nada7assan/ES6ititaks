let obj = {
    userName: "",
    age: 0,
    address: ""
}

let handler = {
    get(target, prop, prox) {
        if (!target.hasOwnProperty(prop)) {
            throw prop + " is not found";
        }
        return target[prop];
    },
    set(target, prop, val, prox) {
        if (!(prop in target)) {
            throw prop + " is not found";
        }
        //name;
        if (prop === "userName") {
            if (typeof val === "number" || typeof val === "boolean") {
                throw "accept characters only"
            }
            if (val.length > "7") {
                throw "accept 7 characters only"
            }
            target[prop] = val;
        }
        //age;
        if (prop === "age") {
            if (typeof val === "string" || typeof val === "boolean") {
                throw "accept numbers only"
            }
            if ( val <=25 || val >= 60) {
                throw "Not in Range"
            }
            target[prop] = val;
        }
        // address
        if (prop === "address") {
            if (typeof val === "number" || typeof val === "boolean") {
                throw "accept characters only"
            }
            target[prop] = val;
        }
    }
}

let obj1 = new Proxy (obj,handler);
// console.log(obj1.age);
// console.log(obj1.Age);

// obj1.userName = "NadaH";
// obj1.userName = "NadaHasaaaaan";
// obj1.userName = 28;
console.log(obj1.userName);

// obj1.age = "jfjf";
// obj1.age = 5;
// obj1.age = true;

console.log(obj1.age);

// obj1.address = 555;
// obj1.address = "ismailia";

console.log(obj1.address);