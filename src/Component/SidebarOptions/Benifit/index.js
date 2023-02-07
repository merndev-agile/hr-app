import * as React from 'react';
import { useOutletContext } from "react-router-dom";

export default function Benifit(){
    const [ containerState] = useOutletContext(); 
    return(
        <div>Benifit
            {console.log("BeniftContainerState",containerState)}
        </div>
    )
}