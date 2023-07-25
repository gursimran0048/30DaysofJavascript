console.log('===Excercise 2 starts here===');

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//Find a union b
const unionSet = new Set([...a,...b])
console.log(unionSet);

//Find a intersection b
const B = new Set(b)
const intersectionSet = new Set(a.filter((aa)=>B.has(aa)));
console.log(intersectionSet);

//Find a with b
const differnceSet = new Set(a.filter((aa)=>!B.has(aa)));
console.log(differnceSet);