const isPositiveInteger = (value, onSuccess, onError) => (value > 0) ? onSuccess() : onError()

isPositiveInteger(15, () => console.log('Value was positive'), () => console.log('Value was negative'))
