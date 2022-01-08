import React, { useState, useEffect } from 'react'  
import Switcher from './Switcher'


const LineCounter = (props) => {

    
const [ verseCount , setVerseCount ] = useState(0) 

const [ timeCount , setTimeCount ] = useState(0) 

const arrStrings = ['Greetings.' , 'My name is Vitor Branco', 'Cuurently looking for a job as a frontend developer']


function nextVerse() {
    setVerseCount(verseCount + 1);  
      }

return (
    <>

    <Switcher nextVerse={nextVerse} arrStrings={arrStrings} verseCount={verseCount} />

    </>
)


}

export default LineCounter

