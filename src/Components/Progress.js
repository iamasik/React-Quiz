function Progress({state,TotalScore,TotalQuestion}) {
    return (
    <header className="progress">
        <progress max={TotalQuestion} value={state.index + Number(state.answer !== null)} />
        <p>{state.index+1}/{TotalQuestion}</p>
        <p>{state.score}/{TotalScore}</p>
    </header>
    )
}

export default Progress
