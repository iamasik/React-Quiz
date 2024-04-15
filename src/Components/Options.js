function Options({options,dispatch,state}) {
    return (
        <div className="options">
            {options.map((value,pos)=>{
                return <button className={`btn btn-option ${pos===state.answer? ' answer':''} ${state.answer !==null?pos===state.question[state.index].correctOption? " correct":" wrong":""}`} disabled={state.answer !==null} key={value} onClick={()=>dispatch({type:'newAns',value:pos})}> {value} </button>
            })}
      </div>
    )
}

export default Options
