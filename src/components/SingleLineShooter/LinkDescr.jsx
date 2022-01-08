import React, { useState, useEffect, useRef } from 'react'  
import SingleLineTyperNoDash from '../SingleLineTyper/SingleLineTyperNoDash'
import './SingleLineShooter.css'
import './LinkDescr.css'

 
const LinkDescr = (props) => {  
const descrRef = useRef()
   

const showDescr = () => { 
    if(descrRef.current.style.display==="block") {
        descrRef.current.style.display="none"    
    }else if(descrRef.current.style.display==="none"){
        descrRef.current.style.display="block"
    }
}   
const hideDescr = () => {
 
    
    descrRef.current.style.display="none"
}   

useEffect(() => {

    hideDescr()
    }, []);
   
    return  <>

                <div className="link-and-ref" key={props.index} > 
                <p  className={props.classNameString} >
                    <span onClick={showDescr}><u><SingleLineTyperNoDash string={props.string} timeInterval={props.timeInterval} /></u></span>
                </p> 
                <div className="descr-box" ref={descrRef}>
                <p ref={descrRef}>{props.description}</p>
                <p><a className="know-more" target="_blank" rel="noreferrer" href={props.hrefLink} >more about this project</a> <span onClick={hideDescr} className='closeButton'><u>x</u></span></p>
                </div>
                </div>
            
            </>
}

export default LinkDescr

