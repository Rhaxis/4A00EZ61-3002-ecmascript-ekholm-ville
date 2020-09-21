function cmdLineArgs (myArgs) {
  myArgs = process.argv.slice(2)
  let tmp = []
  for (let item of myArgs) {
    tmp.push(parseInt(item))
  }
  /* tmp array print
  for (let item of tmp) {
    console.log(item)
  } */
  
  return tmp
}
export default cmdLineArgs