let obj = {
    userName: "Nada",
    age: 28,
    address: "Ismailia"
}

obj[Symbol.iterator] = objIterator;

function objIterator (){
    let keys = Object.keys(this);
    let counter = -1;
    return {
        
        next: () =>{
            counter++;
            if (keys.length > counter){
                return  { value: [keys[counter], this[keys[counter]]], done: false };
            }
            else {
                return  { value: undefined, done: true};
            }
        }
    }
}

for (let enteries of obj) {
    console.log(enteries);
  };

  console.log(...obj);
