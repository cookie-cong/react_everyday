import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


//把组件渲染到这里，然后挂载到app上
ReactDOM.render(
    <App/>,
    document.querySelector("#app")
)
//  1、强制更新
// this.forceUpdate()   react里不用写$ 

// 2、数据的校验
//    安装：cnpm i prop-types --save-dev
//    引用: import PropTypes from 'prop-types'
//    校验：组件名称.propTypes={
//        key:PropTypes.类型
//    }

//    optionalArray: PropTypes.array,
//    optionalBool: PropTypes.bool,
//    optionalFunc: PropTypes.func,
//    optionalNumber: PropTypes.number,
//    optionalObject: PropTypes.object,
//    optionalString: PropTypes.string,
//    optionalSymbol: PropTypes.symbol,


//    optionalNode: PropTypes.node,

//    // 一个 React 元素
//    optionalElement: PropTypes.element,

//    // 你也可以声明属性为某个类的实例，这里使用 JS 的
//    // instanceof 操作符实现。
//    optionalMessage: PropTypes.instanceOf(Message),

//    // 你也可以限制你的属性值是某个特定值之一
//    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

//    // 限制它为列举类型之一的对象
//    optionalUnion: PropTypes.oneOfType([
//        PropTypes.string,
//        PropTypes.number,
//        PropTypes.instanceOf(Message)
//    ]),

//    // 一个指定元素类型的数组
//    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

//    // 一个指定类型的对象
//    optionalObjectOf: PropTypes.objectOf(PropTypes.number),


// 3、非父子组传值
//    $on $emit $off  
//    $emit触发
//    $on 接收监听
//    $off 停止接收和触发

//    observer中是封装的$on $emit $off 方法