let numbers = [6,2,5,3,6,7,2,8,3,16,33,12,6,0,3,2,6,1,10,35,99]

let evenNumbersResult = []
let oddNumbersResult = []
for (let i = 0; i < numbers.length - 1; i++) {
  if(numbers[i]%2 == 0) {
    evenNumbersResult.push(numbers[i]/2)
  } else {
    oddNumbersResult.push(numbers[i]*2)
  }
}
console.log(evenNumbersResult)
console.log(oddNumbersResult)


// while(i < 9) {
//  // console.log(numbers[i])
//   i++
// }

// do {
//   console.log("kurban")
//   console.log(i)
//   i++
// }
// while(i < 10)

// 1.1 let i = 0
// 1.2  console.log(i)// 0
// 1.3 console.log(numbers[i])//a
// 1.4  i < 10 // true
// 1.5  i++  // i = 1

// 2.1  console.log(i)//1 
// 2.2  console.log(numbers[i])//b
// 2.3  i < 10 // true
// 2.4  i++ // i = 2

// 3.1  console.log(i)//2
// 3.2  i < 10 // true
// 3.3  i++ // i = 3

// 4.1  console.log(i)//3
// 4.2  i < 10 // true
// 4.3  i++ // i = 4
//.... i = 10
// 10.1  console.log(i)//10
// 10.2  i < 10 // false



for (elemetn in numbers) {

}