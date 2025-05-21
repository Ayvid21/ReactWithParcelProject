const generateMultiplicationTables = (tableOf, tableTill) => {
    if( tableOf < 0 || tableTill < 0 ) {
        throw Error("Input cannot be negative!" );
    }
    if(typeof tableOf !== 'number' || typeof tableTill !== 'number' ) {
        throw Error("Input should be a number!");
    }
    if( !Number.isInteger(tableOf) || !Number.isInteger(tableTill)) {
        throw Error("Input number should be an integer!");
    }
    else {
        for( let i=1; i <= tableTill; i++ ) {
            console.log(`${tableOf} * ${i} = ${i * tableOf}`);
        }
    }
}

const generateMultiplicationTables2 = (tableOf, tableTill) => {
    if( tableOf < 0 || tableTill < 0 ) {
        throw Error("Input cannot be negative!");
    }
    if(typeof tableOf !== 'number' || typeof tableTill !== 'number' ) {
        throw Error("Input should be a number!");
    }
    if( !Number.isInteger(tableOf) || !Number.isInteger(tableTill)) {
        throw Error("Input number should be an integer!");
    }
    else {
        for( let i=tableOf; i <= tableOf*tableTill; i=i+tableOf  ) {
            console.log(i);
        }
    }
}

// Call the functions directly to see their output
generateMultiplicationTables(12, 5)
generateMultiplicationTables(15.3, 9)
generateMultiplicationTables(8, 20)

generateMultiplicationTables2(12, 5)
generateMultiplicationTables2(15.3, 9)
generateMultiplicationTables2(8, 20)