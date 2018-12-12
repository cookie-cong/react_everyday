import React,{Component} from 'react'
import observer from './observer'
import PropTypes from 'prop-types'
class One extends Component{
    constructor(){
        super();
        this.state={
            message:"哈哈"
        }
    }
    render(){
        let {name} =this.props
        return(
            <div className="one">
                <h2>我是one组件</h2>
                <button onClick={this.handleClick.bind(this)}>发送值给two组件</button>
                <p>接收父组件传来的值:{name}</p>
               
            </div>
        )
    }
    handleClick(){
        console.log(this.state.message)
        observer.$emit("handle",this.state.message)
        // alert(1)
    }
}
//数据的校验
One.propTypes={
    name:PropTypes.string
}
export default One;