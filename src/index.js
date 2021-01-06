import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

ReactDOM.render(<App />, 
  document.getElementById('root'))
// class Array1 {

//   constructor(arr){
//     this.arr = arr;
//   }

//   push() {
//     const newLength = this.arr.length + arguments.length;
//     this.arr = [...this.arr, ...arguments]
//     return newLength
//   }

//   pop() {
//     const lastElem = this.arr[this.arr.length - 1];
//     this.arr.length = this.arr.length - 1;
//     return lastElem
//   }

//   shift() {
//     const newArr = [];
//     const firstElem = this.arr[0];
//     for(let i = 0; i < this.arr.length - 1; i++){
//       newArr[i] = this.arr[i+1]
//     }
//     this.arr = newArr;
//     return firstElem
//   }

//   unshift() {
//     const newArr = [...Array.from(arguments), ...this.arr];
//     this.arr = newArr;
//     return this.arr.length;
//   }

//   forEach(callback) {
//     for(let i = 0; i < this.arr.length; i++){
//       callback(this.arr[i], i, this.arr);
//     }
//   }

//   map(callback) {
//     const newArr = [];
//     for(let i = 0; i < this.arr.length; i++){
//       newArr[i] = callback(this.arr[i], i, this.arr);
//     }
//     return newArr;
//   }

//   reduce(callback, accumulator) {
//     for(let i = 0; i < this.arr.length; i++){
//       accumulator = callback(accumulator, this.arr[i], i, this.arr);
//     }
//     return accumulator;
//   }

//   reduceRight(callback, accumulator) {
//     for(let i = this.arr.length - 1; i >= 0; i--){
//       accumulator = callback(accumulator, this.arr[i], i, this.arr);
//     }
//     return accumulator;
//   }

// }


// let arr = new Array1([88, 2, 3, 4, 6, 34, 50, 66]);
// console.log(arr.arr)
// // console.log(arr.pop());
// // console.log(arr.push('push', 2, 'test'));
// // console.log(arr.shift());
// // console.log(arr.unshift(100, 200, 300));
// // arr.forEach((item, index, arr) => console.log(item, index, arr));
// // const newArr = arr.map((item) => item * 2);
// // const newArrReduce = arr.reduce((sum, elem) => sum += elem, 0);
// const newArrReduceRight = arr.reduceRight((sum, elem) => sum += elem, 0);
// console.log(newArrReduceRight)
// console.log(arr.arr)
