'use strict'

// 数据类型

// Number
// javascript不分整数和浮点数 统一使用Number表示

123 - // 整数

123 // 负数

0.123 // 浮点数

1.23456e3 // 科学计数法 1.23456 * 1000

NaN // NaN表示Not a Number 当无法计算结果时用显示

Infinity // 表示无穷大，超过了javascript能计算的最大值

// 附注 由于计算机使用二进制，所以有时候使用16进制表示整数比较方便，Number可以直接做四则运算

// 字符串
// 字符串是指以单引号或双引号括起来的任意文本

'aasd'
'asdasd'
// 附注 ''和""不是字符串的一部分，只是表达方式，aasd才是字符串内容
// javascript的字符串使用''或""括起来的字符表示
// 如果 ' 本身就是字符串的一部分可以使用转义字符来标识
// I'm "OK"
'I\'m \"OK\"'

// 转义字符可以转很多字符 换行符 \n   制表符 \t   \本身也要转义  \\ 代表 \
// Ascll码 可以是 \xxxx 的十六进制表示
// "\x41" 等同于 "A"
// 还可以使用 /uxxxx  表示unicode
// '\u4e2d\u6587'; // 完全等同于 '中文'

// 多行字符串
// 由于字符串拼接使用 /n 换行太麻烦  es6提供了新的多行字符串表示方法 作为模板字符串 可以保留源码中字符串的换行
`
es6
新的表示方法
`

// 模板字符串
在es6之前，拼接字符串使用 + 

var year = 2019
var m = 7
var day = 4
year '年' + m +'月' + day + '日'
// 这样拼接字符串非常麻烦
// es6提供了模板字符串来表示，使用反引号来括住字符串 使用${}包裹变量 同时 反引号还可以保存换行
`${year}年${m}月${day}日` //比较方便，增加代码的可读性

// 字符串操作
// 常见字符串操作
var str = 'Hello word'

console.log(str.length) // 字符串长度
for(var i=0; i<str.length; i++){
  console.log(str[i])  //可以通过使用类似数组取下标的方式获取知道位置的字符
}

str[str.length+1] //undefined 超出部分会显示undefined 不会报错
str[0] = A //不可变，赋值不报错，无效果

// 常用方法
// javascript字符串的常用方法，一般都是返回一个新的字符串 不会对原字符串造成影响
// toUpperCase() 把一个字符串全部变为大写
console.log(str,str.toUpperCase())
// toLowerCase 把字符串全部变为小写
console.log(str, str.toLowerCase())
// indexOf 搜索指定字符串出现的位置
console.log(str, str.indexOf(l))
// substring  返回指定索引区间的子字符串
console.log(str, str.substring(0,3))
// 布尔值
// 布尔值和布尔代数完全一致，只有true和false,要么true要么false,
true
false
// 布尔运算
// && 与运算  所以所以条件均为true时才为true

true&&true  //true
false&&true true&&false //false
false&&false //false

//  ||  或运算,只有其中一个条件为true就停止运算，结果为true
true||true // true
false||true   true||false //true
false||false // false

// 比较运算符
// 对Number进行比较得到一个一个布尔值（javascript允许任意类型进行比较）
>   <     ==    ===

// ==  和 ===区别在于 ==会把比较对象的类型进行转换再进行比较，并不要求比较对象双方类型相同，而===不会转换，所以要求比较双方类型相同
// 由于==会进行类型转换，有时候比较结果不只是true和false，结果比较诡异，所以相等判断尽量坚持使用===

NaN
// NaN 只有进行相等运算就会返回false 包括NaN===NaN,判断NaN 请使用isNaN()函数 NaN是Number类型

// 浮点型的判断
// 由于计算机无法精确表示无限循环小数,比较两个浮动数只能通过差的绝对值是否小于某个阈值

Math.abs((1/3)-(1/3))<0.0000001


// null和undefined
// null表示一空值，0是一个数值， ''是一个长度为0的字符串
// undefined 表示未定义，正常情况我们应该定义为null判断是否为null，只有传递参数时才判断是否为undefined  转换为布尔都是false，意义不大


// 数组 Array
// 数组是一组按顺序排列的集合，集合内的每个值称为元素，数组元素可以是任意类型
// 创建方式
var arr = new Array()

var arr2 = [1, 2, 3, 4, 5, 6]; //为了可读性建议使用
// array 可以通过下标取出数组里的任意元素  也可以通过索引值直接修改元素
console.log(arr2[3]) // 3
arr2[3] = 4
console.log(arr2[3]) // 4
// 如果索引值超过length
var arr2 = [1, 2, 3, 4, 5, 6]
arr2[9] = 9 
console.log(arr2) // [1, 2, 3, 4, 5, 6, undefined, undefined, 9]
// array.length 数组的元素个数
// 附注：直接给数组的length赋值是会直接改变原数组的长度的 请注意 访问索引值不要越界
arr2.length = 2
console.log(arr2) // [1, 2]
arr2.length = 4
console.log(arr2) // [1, 2, undefined, undefined]

// indexOf 查找一个元素并返回下标 不存在则返回-1
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr3.indexOf[10]) // -1
console.log(arr3.indexOf[1])  // 0
console.log(arr3.indexOf['1']) // -1

// slice 截取指定下区间 返回一个新的数组 原数组不受影响

console.log(arr3.slice(0, 3), arr3) // [0, 1, 2] [1,2,3,4,5,6,7,8,9] 不包括结束索引
// 不指定截取区间 默认截取整个数组 可以用来复制数组
var arr4 = arr3.slice()
console.log(arr4) // [1,2,3,4,5,6,7,8,9]

// push 和 pop
// push 向数组尾部添加元素 pop尾部删除一个元素
var arr4 = [2]
arr4.push(3)
console.log(arr4) // [2, 3]
arr4.pop() // [2]

arr4.unshift(1)
console.log(arr4) //  [1,2] 头部添加一个元素
arr4.shift()  // [2] 头部删除一个元素

var arr5 = [4,5,6,1,2,3,7]
arr5.sort()
console.log(arr5) // [1,2,3,4,5,6,7] 直接在元素数组的基础上进行排序 按照默认顺序排序

arr5.reverse()
console.log(arr5) //在原数组的基础上将整个数组反转

var arr6 = [1, 2]
var arr7 = [4, 5]

var arrConcat = arr6.concat(arr7)
console.log(arrConcat) // [1, 2, 4, 5]

// jion 将数组的每个元素转换为字符串 并用指定字符串连接起来
var arr8 = [1,2,3,4,5,6,7,8,9]
console.log(arr8.join('-')) // 1-2-3-4-5-6-7-8-9 

// 多维数组
// 数组的元素也是一个数组 称为多维数组



// 对象是一组键和值组成的无序集合
// 键基本都是字符串 值可以是任意类型
// 创建方式
var obj = new Object()
var obj2 = {
  name:'惊蛰',
  age:'24'
}
// 获取键值的方式
obj2.name
obj2[name]  //对象可以视为特殊的数组

// 属性名必须是一个有效的变量，包含特殊字符必须使用 ''包裹起来
var obj3 = {
  'a-b':1
}
console.log(obj3['a-b'])  //同时必须使用[]才能取出，
console.log(obj3.name) //undefined 取不存在的属性 不会报错
// 由于Object是动态类型可以自由赋值删除
delete obj3['a-b']
// 检测对象是否存在某个属性可以使用in 但是属性可能不是某个对象的，而是继承的
'name' in obj2  // true
'a' in obj2 // false
'toString' in obj2 //true
// 判断某个属性是否是自身拥有的使用
obj2.hasOwnproperty('name') //true
obj2.hasOwnproperty('toString') //false


// Map 和 Set

// es6 提供了一个新的数据结构 Map
var m = new Map([['张三',211],['李四',233]])
m.get('张三')
m.set('王五', '111') //在二维数组加入新值
m.set('王五',222) //会覆盖原来的 111
// 无论表有多大，查询速度都不会变慢，初始化必须接受一个二维数组

// Set和Map一样是key的集合，但是不保存value
var s = new Set([1,1,1,2,3,5]) //接受一个数组作为参数初始化
console.log(s) /[1,2,3,5] //不保存相同的key 会被自动过滤
s.add(6) //添加新的key 
s.delete(6) //删除

// iterable
// 由于array可以使用for循环，Map Set不可以
// 所以提供了新的数据类型 iterable
// array Map Set都属于iterable类型
// for of
var arr = [a,b,c,d,e,f]
for(var i of arr){
  console.log(i) // a b c d e f
}

// 同时解决了for in 的一个问题 只循环元素本身的元素
arr.name = 'demo'

for(var i in arr){
  console.log(i) // 1 2 3 4 5 6 name
}

// 但是最后使用iterable本身 的forEach

arr.forEach(ele,index,array){
  // ele 当前元素
  // index  下标
  // 数组本身
}
// 但由于 Set没有索引 索引 ele 和 index 都是元素本身
