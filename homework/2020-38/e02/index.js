import { max, min } from './modules/utility.js'
import cmdLineArgs from './modules/commandlineargument.js'

let myarray = [1, 2, 3, 4]
console.log(max(myarray))
console.log(min(myarray))

let argsArray = cmdLineArgs()

console.log(min(argsArray))
console.log(max(argsArray))