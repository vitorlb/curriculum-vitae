import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingleLineTyper from '../SingleLineTyper/SingleLineTyper' ;
import './SingleLineShooterRouter.css'; 

const SingleLineShooterRouter = (props) => {
    
const shooter = []

const [counter , setCounter] = useState(0)

const [display1, setDisplay1] = useState('')
const [display2, setDisplay2] = useState('')
const [display3, setDisplay3] = useState('') 
 
const smoothScroll = () => { 
    let position = document.getElementsByClassName('route-About')[0]
    if(window.innerWidth < 601){position.scrollIntoView({behavior: "smooth"})};
 
}

const verseArray = [ setDisplay1, setDisplay2, setDisplay3 ] 

useEffect(() => { 

    props.verses.map((e , i) => {
         
        shooter.push(<Link className={'route-' + e.split(' ')[0]} key={i} to={props.linkComponents[i]}><span className="fuck" onClick={() => {smoothScroll()}}><SingleLineTyper string={e} timeInterval={props.incrementTime} /></span></Link>)
    })

    if(counter < shooter.length){
 
    const timer = setTimeout(() => {
       if(counter < props.verses.length) {
           verseArray[counter](shooter[counter])   
        };
        
        setCounter(counter + 1)
      }, props.timeToNext * (counter + 1));
      return () => clearTimeout(timer);
     
    }

}, [[] , counter]);
 
  
    return  (
        <>
        <props.lineType>{display1}</props.lineType>
        <props.lineType>{display2}</props.lineType>
        <props.lineType>{display3}</props.lineType>
        
       {/*  <h1>{display4}</h1> */}
        </>
    )
}

export default SingleLineShooterRouter

