function iseven(N){
  if(N == 0 ){
    return true
  }else if (N  == 1){
    return false
  }else if(N < 0){
    return false
  }
  else{
    return iseven(N-2)
  }
}

console.log(iseven(-1))
