import React from "react";

function Test(props){
    console.log("TEST PAGE")
    return (
        <div>
            <h1>{props.data}</h1>
        </div>
    )
}

export default Test;