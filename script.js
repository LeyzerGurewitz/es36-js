// const arrow = (num, bool) => {
//     let arrow = "-".repeat(num)
//     if(bool === false){
//          arrow = "<" + arrow
//     }
//     else{
//         arrow = arrow + ">"
//     }
//     return arrow

// }

// console.log(arrow(7, true))


// // const inputNum = (num) => {
// //     const arr = []
// //      while(num >  0 )  {
// //         arr.push(num)
// //         const input = prompt("Enter num: ")
// //      }
// //      return arr
// // }
// // const input = prompt("Enter num: ")

// // let arrNum = inputNum(Number(input))
// // const max = Math.max(arrNum);

// // const len = arrNum.length;

// // const sum = arrNum.reduce((ecc, val) => ecc + val, 0);

// // const ave = sum/len;

// // const numF = arrNum.length > 4 ? arrNum[3] : arrNum[arrNum.length -1];


// const ster = (num) => {
//     while( num > 0){
//         console.log("*".repeat(num--));       
//     }
// }
// ster(3)

// const ster1 = (num) => {
//     for( i =1; i<= num; i ++){
//         console.log("*".repeat(i));       
//     }
// }
// ster1(3)

// const multiplicationTable = (num) =>{
//     for(i = 1; i <= num; i++){
//         for(j = 1; j <= num; j++){
//             console.log(i * j)
//         }
//     }
// }

//  multiplicationTable()

// const revers = (num) => {
//     let result = 0;
//     while(num > 0 ){
//         result = result * 10 +num%10;
//         num = num/10
//     }
//     return result;
// }

// console.log(revers(113864))
