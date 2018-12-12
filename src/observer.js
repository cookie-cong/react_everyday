const eventList={
  //这里面是一个键值对 事件名称：方法
}
// const $on = function(eventName,cb) { 
//     //判断当前事件名称是否存在
//     if(!eventList[eventName]){
//         eventList[eventName] = []
//     }
//     eventList[eventName].push(cb)
// }

//  const $emit = function(eventName,params){
//      //判断当前事件名称是否存在
//      if(eventList[eventName]){
//         eventList[eventName].map((cb)=>{
//             cb(params);
//         })
//      }else{
//          return;
//      }
// }

//  const $off = function(eventName,params){
//     if(eventList[eventName]){
//         if(params){
//             eventList[eventName] = eventList[eventName].filter((cb)=>{
//                 return params != cb;
//             })
//         }else{
//             eventList[eventName] = [];
//         }
//     }
// }

// export default {
//     $on,
//     $emit,
//     $off
// }

const $on=(eventname,ways)=>{
    if(!eventList[eventname]){//当事件名称不存在的时候，也需要让他等于一个空数组，这样才能保证键值得存在
        eventList[eventname]=[]
    }
    eventList[eventname].push(ways)//随后再把方法push进去
}
const $emit =(eventname,params)=>{
    if(eventList[eventname]){//触发的时候，判断事件名称是否存在，存在，回调函数将值传过去
        eventList[eventname].map((cb)=>{
            cb(params)
        })
    }else{
        return;
    }
}
const $off=(eventname,params)=>{
    if(eventList[eventname]){
        if(params){
            eventList[eventname]=eventList[eventname].filter((item)=>{
                return params != item
            })
        }else{
            eventList[eventname]=[]
        }
    }
}
export default {
    $on,
    $emit,
    $off
}