let n = ""
let size = 4
for(i=0; i< size; i++){
  for(j=0; j<size; j++){
    n += " #"
  }
  n += "\n"
  for(k=0; k<size; k++){
    n += "# "
  }
  n += "\n"
}
console.log(n)
