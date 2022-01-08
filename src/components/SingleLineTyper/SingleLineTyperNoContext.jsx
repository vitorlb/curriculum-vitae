import React, { useState, useEffect } from 'react' 

const SingleLineTyperNoContext = (props) => {

    const [dasher, setDasher] = useState(<span ref={props.hiderRef} id="cursor">.</span>)
 
    const [displayString, setDisplayString] = useState('');
    const [lengthCount, setLengthCount] = useState(0);
    const [incrementSwitch, setIncrementSwitch] = useState(true); 
 
    
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



    return (

        <>
            {displayString}{dasher}
        </>

    )
}

export default SingleLineTyperNoContext

