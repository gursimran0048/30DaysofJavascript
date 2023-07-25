console.log('===Excercise 2 starts here===');
//Check the speed difference among the following loops: while, for, for of, forEach

const arr= [0,1,2,3,4,5,6,7,8,9,10];

console.time('While loop')
let i = 0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
console.timeEnd('While loop')

console.time('For loop')
for(let i = 0; i<arr.length; i++) console.log(arr[i]);
console.timeEnd('For loop')

console.time('For of loop')
for(let i of arr) console.log(i);
console.timeEnd('For of loop')

console.time('For each loop')
arr.forEach((a)=>console.log(a))
console.timeEnd('For each loop')


