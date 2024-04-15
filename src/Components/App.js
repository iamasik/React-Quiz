import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Questions from "./Questions";
import Start from "./Start";
import Endpage from "./Endpage";
import Progress from "./Progress";
import Main from "./Main";

const InitialState={
  question:[],
  status:'loading',
  index:0,
  answer:null,
  score:0,
  time:0
}
function reducer(state,action){
  switch(action.type){
    case("DataLoad"):
      return {...state, question:action.value, status:'ready'}
    case("Error"):
      return {...state, status:'error'}
    case("Start"):
      return {...state, status:'active', time:state.question.length*30}
      // return {...state, status:'active', time:10}
    case("Time"):
      return {...state, time:state.time-1, status:state.time===0?'finish':state.status}
    case("newAns"):
    {
      const iscorrect=state.question[state.index].correctOption===action.value
      return {...state, answer:action.value, score: iscorrect? state.score+state.question[state.index].points:state.score}
    }
    case("Next"):
      return {...state, answer:null, index:state.index+1}
    case("Finish"):
      return {...state, answer:null, status:'finish'}
    case("Reset"):
      return {...InitialState,question:state.question, status:'ready'}
    default:
      throw new Error('Something is wrong')
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,InitialState)
  const TotalQuestion=state.question.length
  const TotalScore=state.question.reduce((prev,curr)=>{return prev+curr.points},0)
  useEffect(()=>{
    fetch('http://localhost:9000/questions').then((res)=>res.json()).then(Data=>dispatch({type:"DataLoad", value:Data})).catch(err=>dispatch({type:"Error"}))
  },[])
  return (
    <div className="app">
      <Header />
      <Main>
      {state.status==="loading" && <Loader/>}
      {state.status==="error" && <Error/>}
      {state.status==="ready" && <Start QuizSize={state.question.length} dispatch={dispatch}/>}
      {state.status==="active" && 
      <>
      {state.status==="active" && <Progress state={state} TotalQuestion={TotalQuestion} TotalScore={TotalScore}/>}
      {state.status==="active" && <Questions Quiz={state.question[state.index]} TotalQuestion={TotalQuestion} state={state} dispatch={dispatch}/>}
      </>
      }
      {state.status==="finish" && <Endpage state={state} dispatch={dispatch}/>}
      </Main>
    </div>
  );
}

export default App;
