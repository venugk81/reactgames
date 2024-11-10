import React from "react";
import { store } from "../App";


const ComponentA = () => {

    return (
        <div>
            
                <store.Consumer>
                    {
                        value=> <div> Component A- {value}</div>
                    }        
                </store.Consumer>
            
            <div>Component A</div>
        </div>
    )
}

export default ComponentA;