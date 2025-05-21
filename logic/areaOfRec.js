function calcAreaOfRec (length, width) {
    if( length <= 0 ) {
        throw new RangeError("length should be a positive number");
    } 
    if( width <= 0 ) {
        throw new RangeError("width should be a positive number");
    }

    const area = length * width;
    console.log('Area of Rectangle is ', area);
}

const calcAreaOfRec2 = ( l, w ) => {
    if( l > 0 && w > 0 ) {
        const area =  l * w;
        console.log(area)
    } else {
        throw new RangeError("Length and Width cannot be negative");
    }    
}


calcAreaOfRec( 2, 2 );
calcAreaOfRec( 12, 21 );
calcAreaOfRec( 1.2, 2.3 );
calcAreaOfRec2( -2, 542 );
calcAreaOfRec( 892, -4 );
calcAreaOfRec( 0, 542 );
calcAreaOfRec( 0, 0 );
calcAreaOfRec2( 0.4, 120 );