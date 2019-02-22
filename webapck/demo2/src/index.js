import './css/style.css'
import Icon from './image/demo.jpg'

document.write('<h1>hello word</h1>');

function iconComponent(){
  let myImg = new Image();
  myImg.src = Icon;
  
  let element = document.createElement('div');
  element.appendChild(myImg)

  return element
}

document.body.appendChild(iconComponent());