function fibonacciNum(n) {
  if (n < 2) return n
  return fibonacciNum(n - 1) + fibonacciNum(n - 2)
}

this.addEventListener('message', message => {
  const { data } = message
  this.postMessage(fibonacciNum(data))
})