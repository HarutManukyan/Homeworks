//3. Write a recursive function to determine whether all digits of the number are odd or
//not.
let checkOdd = (num) => {
        
  let lastDigit = num % 10
  if(lastDigit % 2 == 0){

      return false
  } else {
      num = (num - lastDigit)/10
  }
  checkOdd(num)
}
console.log(checkOdd(1211133))





//4. Given an array of numbers. Write a recursive function to find its //minimal positive element. (if
//such element does not exist, return -1)․
let findMinPos = (arr, n = 0) => {
  arr.sort()
  if(arr[0] < 0){
      arr.splice(0, 1)
  } else {
      return arr[0]
  }
  findMinPos(arr)
}
console.log(findMinPos([56, -9, 87, -23, 0, -105, 55, 1]))


//Չեմ հասկանում խի undefined-են տալի