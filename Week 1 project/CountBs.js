function countBs(n){
  let count = 0
  for(let i = 0; i<n.length; i++){
    if(n[i] == "B"){
      count++
    }
  }
  return count
}
console.log(countBs("BOB"))

function countChar(n, p){
  let count = 0
  for(let i = 0; i<n.length; i++){
    if(n[i] == p){
      count++
    }
  }
  return count
}
console.log(countChar("kakkerlak", "k"));
