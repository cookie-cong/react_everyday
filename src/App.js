import React,{Component} from 'react'
import One from './one'
import Two from './two'
import './style.css'
class App extends Component{
    constructor(){
        super();
        this.state={
            val:"丛紫怡"
        }
    }
    render(){
        let {val} = this.state
        return(
            <div>
                <One name={val}></One>
                <Two>
                    <p>111</p>
                    <p>222</p>
                    <p>333</p>
                </Two>
            </div>
        )
    }
}
export default App;