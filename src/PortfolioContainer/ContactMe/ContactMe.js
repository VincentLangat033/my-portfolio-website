import React from 'react'
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
    
        Animations.animations.fadeInScreen(props.id);
        };
        const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="contact-me-container fade-in" id={ props.id || ''}>
        <ScreenHeading subHeading={ "Let's Keep In Touch"} title={ "Contact Me" } />

    </div>
  )
}

export default ContactMe


