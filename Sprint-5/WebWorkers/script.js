function calculate() {
  const btn = document.querySelector('.calc')

  btn.addEventListener('click', () => {

  const input = document.getElementById('inputNumber').value,
        result = document.getElementById('result')

    if (window.Worker) {
      const worker = new Worker('./worker.js')

      result.innerText = 'Calculating...'
     
      worker.onmessage = message => {
        result.innerText = `Result: ${message.data}`
      }     
      worker.postMessage(input)
    }
  })
}

calculate();





















