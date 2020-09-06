const isPositiveInteger = (value, onSuccess, onError) => (value > 0) ? onSuccess() : onError()

function onSuccess() {
  console.log('Value is positive')
}

function onError() {
  console.log('Value is not positive')
}

isPositiveInteger(-1, onSuccess, onError)