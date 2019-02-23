import { printMe } from "./print";

document.write('模块热更12')

if(module.hot){
  module.hot.accept('./print.js',function() {
    console.log('print console')
    printMe()
  })
}
