import React from 'react'
import Typical from 'react-typical'
import "./profile.css"
import ScrollService from '../../../utilities/ScrollService'

function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.linkedin.com/in/vincent-langat-41a0901b5/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/vincent-langat-41a0901b5/'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/vincent-langat-41a0901b5/'>
                        <i className='fa fa-instagram-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/vincent-langat-41a0901b5/'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://twitter.com/Kimklacsy'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='https://github.com/VincentLangat033'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/vincent-langat-41a0901b5/'>
                        <i className='fa fa-linkedin'></i>
                    </a>


                    </div>
                    
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I am <span className='highlighted-text'>Vincent Lang'at</span>

                        </span>

                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev ",
                                    1000,
                                    "Full Stack Dev",
                                    1000,
                                    "MERN Stack Dev",
                                    1000,
                                    "React Dev",
                                    1000,
                                ]}
                                
                                />

                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building apllications with front and back end operations.

                            </span >


                        </span>

                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
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
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>

                </div>
                

            

        </div>

    </div>
  )
}

export default Profile