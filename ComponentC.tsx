import React, { useState } from "react";
import { diceNumber } from "../App";

const ComponentC = () => {

    const [val, setVal] = useState(0);
    const changeValue =()=>{
        setVal(10);        
    }
    return (
        <div>Component C
            <diceNumber.Consumer>
                {
                    value => <div> Component C- {value}</div>
                                      
                }
            </diceNumber.Consumer>
            <button onClick={changeValue}>Change Value {val}</button>        
        </div>
    )
}

export default ComponentC;

// https://oida.dev/typescript-react/hooks/