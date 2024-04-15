import { useEffect } from "react";

function Timer({state,dispatch}) {
    const min=Math.floor(state.time/60)
    const Sec=state.time%60
    useEffect(()=>{
       const id= setInterval(() => {
            dispatch({type:'Time'})
        }, 1000);
        return ()=>clearInterval(id)
    },[dispatch])
    return (
        <div className="timer">
          {min<10?`0${min}`:min} : {Sec<10?`0${Sec}`:Sec}
        </div>
      );
} 

export default Timer
 