import React from 'react'
import reducer from './reducer.js'

function Child2(){

let [value,dispatch] = React.useReducer(reducer,0);

    return (

        <div>

        <h1>Counter reducer ---- {value}</h1>

        <button onClick = {() => dispatch("INCREMENT")}> + </button>


        </div>

    )
}

export default Child2