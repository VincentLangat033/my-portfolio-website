import React,{useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'


function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) =>{
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? ( 
                        <div className='heading-date'>
                            {props.fromDate + "_" +props.toDate}

                        </div>
                    ) : <div> </div>
                }
                </div>
                <div className='resume-sub-heading'>
                    <span> {props.subHeading ? props.subHeading : ""}</span>

                </div>
                <div className='resume-heading-description'>
                    <span> {props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
    };

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillsDetails = [
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "React Js", ratingPercentage: 85},
        {skill: "Node JS", ratingPercentage: 85},
        {skill: "Ruby", ratingPercentage: 85},
        {skill: "Ruby on Rails", ratingPercentage: 85},
        {skill: "HTML", ratingPercentage: 90},
        {skill: "CSS", ratingPercentage: 88},
        {skill: "Mongo DB", ratingPercentage: 60},
        {skill: "Python", ratingPercentage: 60},
    ];

    const projectDetails =[
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A Personal Portfolio Website to showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap"

        },
        {
            title: "Real Estate Management System",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "A Real Estate House Management System duped Keja Yangu",
            subHeading: "Technologies Used: React JS, Bootstrap"

        },
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2020", toDate: "2022"},
            description: "A Personal Portfolio Website to showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap"

        },

    ];


    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading 
            heading = {"Moringa School"}
            subHeading ={"Full Stack Web Development"}
            fromDate={"2022"}
            toDate={"2022"} 
              />
            <ResumeHeading 
            heading = {"Meru University of Science and Technology, Kenya"}
            subHeading ={"BACHELOR OF SCIENCE COMPUTER SCIENCE"}
            fromDate={"2017"}
            toDate={"2022"} 
              />
              <ResumeHeading 
            heading = {"High School"}
            subHeading ={"Kabianga School, Kericho"}
            fromDate={"2013"}
            toDate={"2016"} 
              />

        </div>,
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading 
            heading = {"County Government of Kericho"}
            subHeading ={"ICT INTERN"}
            fromDate={"2018"}
            toDate={"2018"} 
              />
              <div className='experience-description'>

                  <span className='resume-description-test'>
                      I worked as an ICT Intern at the county Government
                       of Kericho
                  </span>
              </div>
              <div className='experience-description'>
              <span className='resume-description-test'>
                      -I developed the following as an ICT Intern at the county Government 
                      of Kericho
                  </span> 
                  <br/>
                  <span className='resume-description-test'>
                      -I also developed the following as an ICT Intern at the county Government 
                      of Kericho
                  </span> 
                  <br />
                  <span className='resume-description-test'>
                      -I also developed the following as an ICT Intern at the county Government 
                      of Kericho
                  </span> 
                  

              </div>

        </div>

    ]
    
    let fadeInScreenHandler = (screen) =>{
        if(!screen.fadeScreen !== props.id)
        return

        Animations.animations.fadeInScreen(props.id)

    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='resume-container screen-container' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        </div>

    </div>
  )
}

export default Resume