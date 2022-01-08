import React, { useState , useEffect } from 'react' 
import MachineText from './MachineText'


const Switcher = ({verseCount , arrStrings , ...props }) => {

const [startMarker , setStartMarker] = useState(true)
const [trigger , setTrigger] = React.useState(false);

function startNext(triggered) {
    setTrigger(triggered);  
      }

 
useEffect(() => { 
    if (!startMarker){

        const interval = setInterval(() => {
        props.nextVerse()
        
    }, 500);
    
    return () => {
            clearInterval(interval);
        };

    };
    if (startMarker === true) {

        setStartMarker(false)
    }

}, [trigger]);


return arrStrings.map((string , e) => {
    if (e === verseCount ) {
        return <MachineText trigger={trigger} startNext={startNext} timeInterval={15} timeToWrite={500} timeToErase={1200} string={arrStrings[verseCount]} multipleBoolean={true}/>
    }
})  


}

export default Switcher

