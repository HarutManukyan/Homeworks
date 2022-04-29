let implementMap = (arr, map) => {
    let action = prompt()
    switch(action){
      case 'change':
        for(let i = 0; i < arr.length; i++){
          arr[i] = map 
       }
       break;
       case '*':
        for(let i = 0; i < arr.length; i++){
          arr[i] =arr[i] * map 
       }
       break;
       case '/':
        for(let i = 0; i < arr.length; i++){
          arr[i] /= map 
       }
       break;
       case '+':
        for(let i = 0; i < arr.length; i++){
          arr[i] += map 
       }
       break;
       case '-':
        for(let i = 0; i < arr.length; i++){
          arr[i] = arr[i] - map 
       }
       break;
    }
    if(a = 'change'){
      
    }
    
    return arr
    
  }
  console.log(implementMap([1, 2, 3, 4, 5, 6, 7], 5))