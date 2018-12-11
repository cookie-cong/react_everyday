import React,{Component} from 'react'
class One extends Component{
   constructor(){
       super();
   }
   render(){
       console.log(this.props)
       let {infor} =this.props  
       return (
           <div>
               {/* 父组件给子组件传值 */}
               <h2>接收父组件传来的值:{infor}</h2>
               {/* 子组件调用父组件的方法 */}
               <button onClick={this.handleClick.bind(this)}>点击</button>
           </div>
       )
   }
   handleClick(){
       this.props.show("子组件的值")
   }
}
One.defaultProps={
    infor:"默认值"
}
export default One;