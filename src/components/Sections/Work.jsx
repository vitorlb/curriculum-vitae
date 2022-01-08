import React, { useEffect } from 'react';    
import SingleLinkShooter from '../SingleLineShooter/SingleLinkShooter'; 
import SingleLineTyperNoContext from '../SingleLineTyper/SingleLineTyperNoContext';
import './work.css'


const Work = (props) => {
 
    
    useEffect(() => {
         
        if(props.isVisited.work !== true){
        return    props.visited(prevProps => ({...prevProps, work: true}))
            }
            
   }, []);

    return (



        <>
            <div className="work-wrapper">
                <div className='personal'>
                <p className="work-title">  <SingleLineTyperNoContext  string={'PERSONAL WORK:'} timeInterval={10} /></p>
              
                    
                            <SingleLinkShooter
                            timeBetweenVerses={[1000, 1100, 1200]}
                            timeToLaunch={1} 
                            timeToNext={0} 
                            incrementTime={10}
                            hideDasher={true}
                            verses={['This crazy amazing website!', 'Restaurant Orders Registror', 'FARRA colective website']}
                            linkHref={['https://github.com/vitorlb/text-typer', 'https://github.com/vitorlb/order-register-sandbox', '#']}
                            description={[
                                
                                'This website is actually a react.js app designed, developed and styled from scratch by me :) The animated text, for example, is a component built to shoot lines of text. You can render it into any html tag, and costumize de speed of the text, as well as the time between each verse. Explore it in the link below!',
                                'React app with firebase realtime database to register orders in restaurants. It was built to solve the problem of \'Duas de Letra\' restaurant in communication between the three floors. It\'s a web app where you can take orders and change order status in real time. There are two screens, one to take orders, and another one to check orders and order status. That way cooks, production and waiters have instant communication, replacing the writing on little paper and then walk to production only then to be transmitted via speakerphone to the kitchen. It can be costumized to work in different restaurants',
                                'Website built to FARRA colective. A collective of artists and musicians, works also a music abel'
                            ]}
                            />
                </div>
                <div className='co-work'>
                <p className="work-title">
                    <SingleLineTyperNoContext  string={'FREELANCE WORK:'} timeInterval={10} /></p>
                    <SingleLinkShooter
                            timeBetweenVerses={[1000, 1100, 1200, 1300, 1400, 1500]}
                            timeToLaunch={1} 
                            timeToNext={0} 
                            incrementTime={10}
                            hideDasher={true}
                            verses={['Investaureum', 'lateral creative studios', 'Sampla Footwear', 'Syndicato', 'MOB Agency']}
                            linkHref={['https://www.investaureum.com/pt/', 'http://lateral.pt', 'https://samplafootwear.com/', 'https://syndicato.pt/', 'https://mobagency.pt/' ]}
                            description={['Web Design . Web Management . Web Developer','CSS Styler', 'Shopify Developer . javaScript Developer', 'php Developer . javaScript Developer', 'php Developer . javaScript Developer . javaScript Animation Effects']}
                            />
                </div>
                
            </div>

        </>

    )
}

export default Work

