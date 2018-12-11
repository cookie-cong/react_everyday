import React,{Component} from 'react'

class App extends Component{
    constructor(){
        super();
        this.state={
            radioVal:"男",
            timeVal:"请选择",
            peopleVal:[]
        }
    }
    render(){
        let{radioVal,timeVal,peopleVal}=this.state
        return (
            <div>
                {/* 单选框 */}
                <label>
                    <input type="radio" 
                           value="男" 
                           checked={radioVal==="男"}
                           onChange={this.handleChange.bind(this)}
                    />男
                </label>
                <label>
                    <input type="radio" 
                           value="女" 
                           checked={radioVal==="女"}
                           onChange={this.handleChange.bind(this)}
                    />女
                </label>
                <p>您的选择是----{radioVal}</p>
                <hr/>
                {/* 下拉菜单 */}
                <select defaultValue={timeVal} onChange={this.handleChangeTime.bind(this)}>
                    <option value="请选择">请选择</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                </select>
                <p>您选择的时间是---{timeVal}</p>
                <hr/>
                {/* 复选框 */}
                <label>
                    <input type="checkbox" value="柯南" onChange={this.handelPeople.bind(this)}/>柯南
                </label>
                <label>
                    <input type="checkbox" value="小新" onChange={this.handelPeople.bind(this)}/>小新
                </label>
                <label>
                    <input type="checkbox" value="灰原哀" onChange={this.handelPeople.bind(this)}/>灰原哀
                </label>
                <label>
                    <input type="checkbox" value="赤井秀一" onChange={this.handelPeople.bind(this)}/>赤井秀一
                </label>
                <p>您喜欢的动漫明星是---{peopleVal.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}</p>
            </div>
        )
    }
    handelPeople(e){
        let val = e.target.value;//获取value值
        // console.log(val)
        let arr = this.state.peopleVal;//获取数组的值
        let exits = arr.includes(val);//判断数组里面有没有刚才获取的value值
        if(!exits){//如果不存在push进去
            arr.push(val)
            console.log(arr)
        }else{//存在就删除，运用获取下标的方法，然后运用splice的方法删除
            let index = arr.indexOf(val);
            console.log(index)
            arr.splice(index,1)
            console.log(arr)
        }
        this.setState({//数据改变一定要调用这个方法，上面写完并没有让数据发生改变，记住操作完了之后，只有这样才会让数据发生改变
            peopleVal:arr
        })
    }
    handleChangeTime(e){
        let val = e.target.value;
        this.setState({
            timeVal:val
        })
    }
    handleChange(e){
        let val = e.target.value;
        this.setState({
            radioVal:val
        })
    }
}
export default App;