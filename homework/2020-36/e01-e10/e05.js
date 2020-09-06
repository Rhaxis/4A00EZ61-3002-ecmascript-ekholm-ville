const isPositiveInteger = (value, onSuccess, onError) => (value > 0) ? onSuccess() : onError()

isPositiveInteger(-15, function () {
  console.log('Value was positive')
},
function () {
  console.log('Value was negative')
})
