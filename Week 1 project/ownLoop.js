function loop(value, test, update, body) {
  let i = value
  while (test(i)) {
    body(i)
    i = update(i)
  }
}


loop(
  0,
  (i) => i < 5,
  (i) => i + 1,
  console.log
)

