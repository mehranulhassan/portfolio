import React from "react";
import "./About.css";
import img1 from '../../assets/picture/mehran.jpg'
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={img1}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
   I am a MERN Stack Developer with extensive experience in designing, developing, and deploying full-stack web applications. 
   Proficient in MongoDB, Express.js, React.js, and Node.js with a strong understanding of front-end and back-end development processes. 
   Adept at building scalable, high-performance web applications and optimizing them for speed and user experience. 
   A collaborative team player with excellent problem-solving skills, always eager to learn new technologies and improve existing skills to deliver top solutions.
</p>

            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
