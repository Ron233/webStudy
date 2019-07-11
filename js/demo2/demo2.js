// 'use strict'
// 方法 在对象中定义函数 这个函数被称为方法
// 和普通函数一样 但是能使用this 因为所有的函数都在window下，也都可以叫方法，this指向调用这个函数的对象 注意是调用这个函数的对象
function showAge () {
  console.log(this.age)
}
var obj = {
  name: '惊蛰',
  age: '男',
  year: 1,
  showAge: showAge,
  addAge: function () {
    // addAge被obj调用 this  只在addAge内指向obj 在add内不指向 obj
    function add () {
      console.log(this) // 指向window
      return this.year++
    }
    return add()
  }
}
obj.showAge() // 男 调用showAge的是obj
showAge() // undefined   调用showAge 的是window
console.log(obj.addAge()) // NaN this只在被对象调用的方法内指向对象
// 且严格模式下会报错

// 解决方法 捕获this apply bind call
// apply call 是根据函数运行时的this来改变this的
// bind 接收的this 是函数创建时的this
