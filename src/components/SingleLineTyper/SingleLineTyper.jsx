import React, { useState, useEffect, useContext } from 'react' 
import { RouteDetectContext } from '../Wrapper';

const SingleLineTyper = (props) => {

    const routesContext = useContext(RouteDetectContext)

    const [dasher, setDasher] = useState(<span ref={props.hiderRef} id="cursor">.</span>)
 
    const [displayString, setDisplayString] = useState('');
    const [lengthCount, setLengthCount] = useState(0);
    const [incrementSwitch, setIncrementSwitch] = useState(true); 
 
    let fixedString = props.string
    let charArray = props.string.split('')
    

    //time interval para engatilhar escrita de strings

    useEffect(() => {
        
        
        const interval = setInterval(() => {
            if (lengthCount < charArray.length - 1 || lengthCount > -1 ){
            setIncrementSwitch(!incrementSwitch)}
        }, props.timeInterval);
 
        setLengthCount(lengthCount + 1);
 
         
        if (lengthCount > charArray.length - 1 || lengthCount < 0 ){
            clearInterval(interval);
        }

         
        return () => {
            clearInterval(interval);
        };
    }, [incrementSwitch]);
 

    

    useEffect(() => {

        let str = displayString
        if (charArray[lengthCount] !== undefined){
        setDisplayString(str += charArray[lengthCount]); 
         }
        }, [lengthCount]);

 
    

    if(routesContext.about.val !== true){
    return (

        <>
            {displayString}{dasher}
        </>

    )} else {
        return (

            <>
                {fixedString}{dasher}
            </>
    
        )   
    }
}

export default SingleLineTyper

