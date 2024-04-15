import Timer from "./Timer"

function Button({state,dispatch,TotalQuestion}) {
    return (
        <footer>
            <Timer state={state} dispatch={dispatch}/>
            {state.index+1!==TotalQuestion && state.answer !==null && <button className="btn btn-ui" onClick={()=>dispatch({type:'Next'})}>Next</button>} 
            {state.index+1===TotalQuestion && state.answer !==null && <button className="btn btn-ui" onClick={()=>dispatch({type:'Finish'})}>Finish</button>}
        </footer>
    )
}

export default Button
