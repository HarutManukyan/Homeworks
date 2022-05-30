//3. Implement binary search.

function impBinarySrch(arr, num){
    let random = Math.round(Math.random() * arr[arr.length - 1])
    let index = arr.indexOf(random)
    if(random == num){
        return 'We found it'
    } else if(random < num){
        arr.splice(0, index) 
    } else if(random > num){
        arr.splice(index, arr.length - 1)
    }
    return impBinarySrch(arr, num)
}
