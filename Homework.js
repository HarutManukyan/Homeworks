

//1. Given an array. Write a recursive function that removes the first element and returns the given
//array. (without using arr.unshift(),assign second element to first, third element to second...)
let removeFirst = arr => {
 let arr1 = arr.splice(0, 1)
 return arr
}
console.log(removeFirst([6, 78, 'n', 0, 1]))



//3. Given an array and a number N.  Write a recursive function that rotates an array N places to the
//left. (Hint: to add element to the beginning use arr.unshift())
let rotateArr = (arr, num, n = 0) => {
if(n !== num){
  let lastElement = arr.pop()
  arr.unshift(lastElement)
} else {
  return arr
}
return rotateArr(arr,num, n + 1)

}
console.log(rotateArr([1, 2, 3, 4, 5], 2))


