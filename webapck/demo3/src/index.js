import './css/style.css'
import Icon from './image/demo.jpg'
import { printMe } from './print.js'

document.write('<h1>hello word</h1>')

function iconConment(){
  let element = document.createElement('div');
  let myImg = new Image();
  
  myImg.src = Icon;
  element.appendChild(myImg)

  return element
}

document.body.appendChild(iconConment())
printMe()