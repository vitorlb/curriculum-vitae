import React, { useState , useEffect} from 'react'; 
import {Switch, Route} from 'react-router'
import './Wrapper.css' 
import SingleLineShooterV2 from './SingleLineShooter/SingleLineShooterV2'; 
import SingleLineShooterRouter from './SingleLineShooterRouter/SingleLineShooterRouter';
import Contact from './Sections/Contact';
import Work from './Sections/Work';
import About from './Sections/About'; 

export const RouteDetectContext = React.createContext()

const Wrapper = (props) => {
 
 
    const [launchNav, setLaunchNav] = useState('')
 
    const [visitedRoutes, setVisitedRoutes] = useState({

        work: {counter:0,val:false},
        about: {counter:0,val:false}
    })

    const [visitedAbout, setVisitedAbout] = useState(false)
    const [visitedWork, setVisitedWork] = useState(false)

    const navComponent = <nav><SingleLineShooterRouter timeToNext={280} linkComponents={['/about' , '/work', '/contact']} lineType={'h4'} incrementTime={10} verses={['About me', 'Work Experience', 'Contact']}/></nav>
 
    function launchComponent(time , component, slot) {

        setTimeout(function(){

            slot(component)
        }, time);
    } 
    
 
    
useEffect(() => {
         
if(visitedRoutes.about.counter === 2 && visitedRoutes.about.val === false) {

    setVisitedRoutes(prevProps => ({...prevProps, about: {
        counter:2,
        val:true
    }}))
}    
}, [visitedRoutes]); 

 
    
    
/*     useEffect(() => {
        
        setTimeout(function(){
            
            setLaunchNav(navComponent)
        }, 6000);
    }, []); */
    

    return (



        <>
            
            <RouteDetectContext.Provider value={visitedRoutes}>           
            
            <div className="wrapper-main">
 
<SingleLineShooterV2 
                    timeBetweenVerses={[100, 1000, 2400]}
                    timeToLaunch={1500}
                    slotTarget={setLaunchNav}
                    componentToLaunch = {navComponent}
                    launchComponentFunction={launchComponent}
                    timeToNext={800}
                    lineType={'h2'}
                    incrementTime={10}
                    verses={['Greetings.', 'My name is Vitor Branco,', 'I am currently looking for a job as Frontend Developer...']}
                />
                {launchNav}  
            <Switch>
            <Route exact path={'/work'}  component={Work}>
                <Work isVisited={visitedRoutes} visited={setVisitedRoutes}/> 
            </Route>
            <Route exact path={'/about'}> 
                <About isVisited={visitedRoutes} visited={setVisitedRoutes} />  
            </Route>
            
            <Route exact path={'/contact'}> 
                <Contact isVisited={visitedRoutes} visited={setVisitedRoutes} />  
            </Route>
            </Switch>
            
            </div>
            </RouteDetectContext.Provider>
            

        </>

    )
}

export default Wrapper

