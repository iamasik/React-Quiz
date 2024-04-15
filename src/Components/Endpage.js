function Endpage({state,dispatch}) {
    return (
        <>
        <div className="result">
            <p>Your final score is {state.score}</p>
        </div>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'Reset'})}>Reset</button>
        </>
    )
}

export default Endpage
