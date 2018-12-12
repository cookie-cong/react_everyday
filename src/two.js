import React,{Component} from 'react'
import observer from './observer'
class Two extends Component{
    constructor(){
        super();
        this.state = {
            val:""
        }
        observer.$on("handle",(params)=>{
            this.setState({
                val:params
            })
        })
        this.age=20
    }
    render(){
        let {val} =this.state
        return(
            <div className="two">
                <h2>我是two组件</h2>
                <p>接收来自one组件的值:{val}</p>
                {this.props.children}
                <p>我的年龄是:{this.age}</p>
                <button onClick={this.handleClick.bind(this)}>改变年龄</button>
                
            </div>
        )
    }
    handleClick(){
        this.age = 18;
        this.forceUpdate()//强制更新
    }
}
export default Two;

