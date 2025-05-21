const obj1 = {first: 20, second: 30, first: 50};
console.log(typeof NaN)

let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
   var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
console.log(ans);


// What will be the output of the following code snippet?

const example = ({ a, b, c }) => {
 console.log(a, b, c);
};
example(0, 1, 2);