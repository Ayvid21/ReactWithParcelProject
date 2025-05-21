// check if object Values Have Same Type

const isObjectValuesHaveSameType = (obj) => {
    const value = Object.values(obj);

    // if (value.length === 0) {
    //     return true;
    // } else {
    //     const firstType = typeof value[0];
    //     for (let i = 0; i < value.length; i++) {
    //         if (typeof(value[i]) !== firstType) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    if (value.length === 0) {
        return true;
    }

    const firstType = typeof value[0];
    let result = value.every((element) => typeof(element) === firstType)
    return result
};

const obj = {
    a: 1,
    b: 2,
    c: 3,
}; // output -> true

const obj2 = {
    a: 1,
    b: "2",
    c: 3,
}; // output -> false

console.log(isObjectValuesHaveSameType(obj));
