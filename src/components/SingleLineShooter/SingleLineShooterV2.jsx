import React, { useState, useEffect, useRef } from 'react'
import SingleLineTyper from '../SingleLineTyper/SingleLineTyper' 
import './SingleLineShooter.css'
 
const SingleLineShooterV2 = (props) => {
 
const [myArray, updateMyArray] = useState([]);
const [finalArray, setFinalArray] = useState([])
const [loaded, setLoaded] = useState(true)

const hideDasher = props.hideDasher ? true : false 
const hiderRef = useRef()   

useEffect(() => {
 
    }, [finalArray]);

useEffect(() => { 
    
    if(myArray.length < props.verses.length){
        const verseCounter = myArray.length 
        updateMyArray(arr => [...arr, props.verses[verseCounter]])

    }
 

if(myArray.length === props.verses.length ) {
 
    if(loaded) {
        setLoaded(false)
        myArray.map((e,i) => {
            let classNameString = i === myArray.length - 1 ? 'liner laster' : 'liner'
            setTimeout(() => {
                
                setFinalArray(arr => [...arr, <props.lineType className={classNameString} key={i} ><SingleLineTyper hiderRef={hiderRef} string={e} timeInterval={props.incrementTime} /></props.lineType>]);
                 
                if(i === props.verses.length - 1) { 
                    if(hideDasher === true) { 
                        setTimeout(() => { if(hiderRef.current !== undefined || hiderRef.current !== null){hiderRef.current.style.visibility="hidden"} }, 2500);    
                        
                    }
                    if(props.launchComponentFunction !== undefined){
                      
                         props.launchComponentFunction(props.timeToLaunch, props.componentToLaunch, props.slotTarget)
                     }
                 }
            }, props.timeBetweenVerses[i]);
        })
    }
}

}, [[], myArray]);


   
    return  <>{finalArray}</>
}

export default SingleLineShooterV2

