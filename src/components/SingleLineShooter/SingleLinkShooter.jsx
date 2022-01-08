import React, { useState, useEffect } from 'react'
import LinkDescr from './LinkDescr' 
import './SingleLineShooter.css'
 
const SingleLinkShooter = (props) => {
 
const [myArray, updateMyArray] = useState([]);
const [finalArray, setFinalArray] = useState([])
const [loaded, setLoaded] = useState(true)
 

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
                
                setFinalArray(arr => [...arr, <>
                <LinkDescr timeInterval={props.incrementTime} description={props.description[i]} string={e} index={i} classNameString={classNameString} hrefLink={props.linkHref[i]} />
                </>
                    ]);
                 
                if(i === props.verses.length - 1) {
                 
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

export default SingleLinkShooter

