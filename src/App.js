import React,{Component} from 'react'
import One from './one'
class App extends Component{
    constructor(){
        super();
        this.state={
            message:"嘻嘻",
            main:""
        }
    }
    render(){
        let {message,main} = this.state
        return(
            <div>
                {/* 在子组件上自定义了一个属性，然后子组件就可以在那边接收 */}
                <One infor1={message} show={this.handleShow.bind(this)}/>
                <h2>接收子组件传来的值:{main}</h2>
            </div>
        )
    }
    handleShow(val){
        // console.log(val)
        this.setState({
            main:val
        })
        //接收子组件传来的值
    }
}
export default App;