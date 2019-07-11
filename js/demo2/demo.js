// 函数

// arguments 函数传入的所有参数集合 array
function fn (x) {
  console.log(arguments)
}
fn(10, 10)

// es6引入的新的获取 额外传入不确定参数 方法 ...   在此之前只能通过排除arguments某个下标开始，将必须参数和非必须参数分开 且没有传入非必须参数 ...rest 将是一个空数组

function fn1 (x, ...reset) {
  console.log(reset)
}
fn1(1, 2, 3)

// 由于javascript引擎会自动添加; function 的return必须小心
function fn3 () {
  return
  1
}
// 可能执行时变成这样
function fn3 (){
  return ;
  3
}

// 作用域
// 在es5之前 使用var 声明变量存在两个作用域 全局作用域和函数作用域

var a = 1

function varFn(){
  var a = 2
  console.log(a) // 2
}
varFn()
console.log(a) //1
// 函数外的变量为全局作用域 函数数内是函数作用域
// 同时函数内部未定义此变量 会使用全局作用域的变量  内部可以访问外部变量 外部无法访问内部 由内至外查找变量
// 不在函数内定义的变量 即全局变量 同时浏览器下，默认有一个全局对象 window 全局作用域都绑定到window下
// 同时由于不同javascritpt文件的全局变量都绑定到window下，所以会造成命名冲突 减少的方法是自定义一个全局变量，绑定到这个变量下
// for 内也是全局变量

// es6 提供了新的 关键字 let const 解决作用域的问题
// let 是存在作用域的var
// const  是存在作用域的var 但是const 定义的是一个常量 是无法被修改的,否则会报错
// const let 定义的变量常量 作用域是离它最近的 {}

// 变量提升
// javascript 存在着一个怪异的特性
function fn4(){
  console.log(y)
  var y = 1
}
fn4() // 1
// 因此javascript  为了避免额外的错误 必须遵循先定义后使用 同时 es6 增加的 let const 关键字不存在变量提升，会直接报错

// 在es5中 需要取数组或对象的值 必须
var arr = [a,s,d,f]
var item0 = arr[0]
var item1 = arr[1]
var item2 = arr[2]
// es6 增加了解构赋值
var [item0,item1,item2] = arr
var [ , , ,item3 ] = arr
var obj = {
  name:'惊蛰',
  age:'男',
  year:'24'
}
let {age} = obj
// 即使多层嵌套只要保证结构一样就可以赋值，不存在的值会赋值undefined

