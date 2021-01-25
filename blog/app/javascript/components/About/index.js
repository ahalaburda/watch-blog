import React from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function About(){
  return(
    <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
        <div className="container-fluid px-0">
          <div className="row d-flex">
            <div className="col-md-6 d-flex align-items-center">
              <div className="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 ftco-animate fadeInUp ftco-animated">
                <h2 className="mb-4">Made with <FontAwesomeIcon icon={faHeart} /> by <span>Adrian Halaburda</span>. </h2>
                <p>This Project was maded during the inteview process of WillDom.</p>
                <p>Find me at: </p>
                <ul className="list-group">
                  <a href="mailto:adh761@gmail.com?subject=WatchBlog%20Subject" className="list-group-item"><FontAwesomeIcon icon={faEnvelope} /> adh761@gmail.com</a>
                  <a href="https://www.linkedin.com/in/ahalaburda/" className="list-group-item"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;