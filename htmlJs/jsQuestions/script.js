// deep copy an object.
const obj = {
    a: "1",
    b: 2,
    c: {
        d: 23,
        e: [
            1, 3, 4, 5, {
                f: 323,
                g: "234",
                h: "waste"
            }
        ]
    }
}

let deepCopy = (obj) => {
    let copy;
    if(typeof obj === "object") {
        copy = [];
        if(Array.isArray(obj)) {
            for(let a=0; a<obj.length; a++) {
                copy[a] = deepCopy(obj[a]);
            }
        } else {
            copy = {};
            const keys = Object.keys(obj);
            for(let b=0; b<keys.length; b++) {
                const key = keys[b]; 
                copy[key] = deepCopy(obj[key]);
            }
        }
    }
    else {
        copy = obj;
    } 
    return copy; 
};

const result = deepCopy(obj);
console.log(result);
