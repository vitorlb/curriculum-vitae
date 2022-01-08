import React, { useState, useEffect } from 'react'
import SingleLineTyper from '../SingleLineTyper/SingleLineTyper' 
import './SingleLineShooter.css'
 

const SingleLineShooter = (props) => {

const shooter = [] 

const [counter , setCounter] = useState(0)

const [myArray, updateMyArray] = useState([]);

const [display1, setDisplay1] = useState('')
const [display2, setDisplay2] = useState('')
const [display3, setDisplay3] = useState('') 

const [blinkDash1, setBlinkDash1] = useState('')
const [blinkDash2, setBlinkDash2] = useState('')
const [blinkDash3, setBlinkDash3] = useState('')

const dasher = <><span id="cursor">.</span></>

const verseArray = [setDisplay1, setDisplay2, setDisplay3]
const dashes = [setBlinkDash1, setBlinkDash2, setBlinkDash3]
 
useEffect(() => { 
    
    if(myArray.length < props.verses.length){
        const verseCounter = myArray.length 
        updateMyArray(arr => [...arr, props.verses[verseCounter]]) 

    }
  

}, [[], myArray]);




useEffect(() => { 

    props.verses.map((e, i) => {
        const lastVerse = i === props.verses.length -1 ? true : false
        shooter.push(<SingleLineTyper key={`chave${e}`} lastVerse={lastVerse} string={e} timeInterval={props.incrementTime} />)
    })

    if(counter < shooter.length){
 
    const timer = setTimeout(() => {
       if(counter < props.verses.length) {
           verseArray[counter](shooter[counter])
           dashes[counter](dasher) 
           if(counter > 0){dashes[counter - 1]('')} 
           if(counter === props.verses.length - 1) { 
               if(props.launchComponentFunction !== undefined){
                 
                    props.launchComponentFunction(props.timeToLaunch, props.componentToLaunch, props.slotTarget)
                }
            } 
        };
        
        setCounter(counter + 1)
      }, props.timeToNext * (counter + 1));
      return () => clearTimeout(timer);
     
    }

}, [[] , counter]);
 
  
    return  (
        <>
        <props.lineType>{display1}{blinkDash1}</props.lineType>
        <props.lineType>{display2}{blinkDash2}</props.lineType>
        <props.lineType>{display3}{blinkDash3}</props.lineType>
        </>
    )
}

export default SingleLineShooter

