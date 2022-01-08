import React, { useState, useEffect } from 'react' 

const MachineText = (props) => {

    const [ascendMarker, setAscendMarker] = useState(true);
    const [descendMarker, setDescendMarker] = useState(false);
    const [displayString, setDisplayString] = useState('');
    const [lengthCount, setLengthCount] = useState(0);
    const [incrementSwitch, setIncrementSwitch] = useState(true);
    const [startErase, setStartErase] = useState(false); 
    
    let charArray = props.string.split('')

    //time interval para engatilhar escrita de strings

    useEffect(() => {
        
        
        const interval = setInterval(() => {
            if (lengthCount < charArray.length - 1 || lengthCount > -1 ){
            setIncrementSwitch(!incrementSwitch)}
        }, props.timeInterval);

        if ( ascendMarker === true) { setLengthCount(lengthCount + 1) };
        if ( descendMarker === true) {

            setLengthCount(lengthCount - 1)
        };
        if (lengthCount > charArray.length - 1 || lengthCount < 0 ){
            clearInterval(interval);}
         
        return () => {
            clearInterval(interval);
        };
    }, [incrementSwitch]);

    //Timer para desplotar erase da string 

    useEffect(() => {
        const interval = setInterval(() => {
            
            setDescendMarker(true)
        }, props.timeToErase); 
         
        return () => {
            clearInterval(interval);
        };

    }, [startErase]);

    

    useEffect(() => {

        let str = displayString
        if (ascendMarker === true) { setDisplayString(str += charArray[lengthCount]) };
        if (descendMarker === true) {
            setDisplayString(displayString.substring(0, displayString.length - 1))
            if(lengthCount === -1) { 
                props.startNext(!props.trigger)
                
            }
        };
         
        if (lengthCount === charArray.length - 1) {
            
            setStartErase(true) //Gatilho para iniciar timer responsavel por erase
            setAscendMarker(false) 
        };

        if (lengthCount === -1) {
            
            setDescendMarker(false)
            }
        }, [lengthCount]);



    return (

        <>
            {displayString}
        </>

    )
}

export default MachineText

