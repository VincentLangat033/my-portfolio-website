import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './aboutme.css'

function AboutMe(props) {
    let fadeInScreenHandler = (screen) =>{
        if(!screen.fadeScreen !== props.id)
        return

        Animations.animations.fadeInScreen(props.id)

    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    const SCREEN_CONSTANTS = {

        description: "Full Stack Web developer with background knowledge of MERN Stack, React",
        highlights: {
            bullets:[
                "Full Stack web developer",
                "Interactive Front End as per design",
                "React",
                "Redux for State Management",
                "Building REST API",
                "Managing Database",


            ],

            heading: "Here are a Few Highlights:"


        }
    }

    const renderHighlight = ()=>{

        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>

                </div>
            ))
        )
    }



  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading  title={"About Me"} subHeading={"Why choose me?"}/>
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-description'> {SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlight()}


                    </div>
                    <div className='about-me-options'>
                    <button className='btn primary-btn'>
                            {" "}
                            Hire Me {" "}
                            

                        </button>
                        <a href="doc00517020220616141408.pdf" download="Vincent VinnieKimCV.pdf" >
                                <button className='btn highlighted-btn'>
                                    Get Resume
                                   

                                </button>
                            </a>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default AboutMe