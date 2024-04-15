import Button from "./Button"
import Options from "./Options"

function Questions({Quiz,dispatch,state,TotalQuestion}) {
    return (
        <div>
            <h4>{Quiz.question}</h4>
            <Options options={Quiz.options} state={state} dispatch={dispatch}/>
            <Button dispatch={dispatch} state={state} TotalQuestion={TotalQuestion}/>
        </div>
    )
}

export default Questions
