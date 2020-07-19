import React from 'react';
import Context from './context.js'

function Child(){

    let context = React.useContext(Context)
    console.log(context);
    return(
        <div>
        <h1> Counter Context API ---- {context[0]} </h1>
        <button onClick = {() => context[1](++context[0]) } > + </button>
        </div>
    );
}

export default Child