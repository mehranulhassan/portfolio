import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import img1 from '../../assets/picture/HOME11.JPG';
import img2 from '../../assets/picture/Home.JPG';
import img3 from '../../assets/picture/blogging.JPG';
import img4 from '../../assets/picture/kacha.JPG';
import img5 from '../../assets/picture/cake.jpg';
import img6 from '../../assets/picture/todo.png';

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        I am a passionate MERN Stack Developer with experience working on diverse projects, including NGO platforms, eCommerce solutions, and professional portfolios. Through my work with NGOs, I’ve helped build user-friendly systems that facilitate donations, volunteer management, and community outreach.
        </p>
        
        <div className="row" id="ads">
          <Spin>
            {/* First Project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={img1} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Vite</span>
                  <span className="card-detail-badge">Admin panel</span>
                  <span className="card-detail-badge">Node Mailer</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     Preserving Pakistan Heritage (E-Commerce)
                    </h6>
                  </div>
                  <a className="ad-btn" href="https://github.com/mehranulhassan/preservingPakistanHeritage">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack Ngo</span>
                  <img src={img2} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node js</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Mongo db</span>
                  <span className="card-detail-badge">Node Mailer</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Help On Demand (HOD)</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/mehranulhassan/Hod">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Third Project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img src={img3} alt="project3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Blogging App (Models & Migrations)</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/mehranulhassan/blogging-app">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Fourth Project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={img4} alt="project4" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Vite</span>
                  <span className="card-detail-badge">Admin panel</span>
                  <span className="card-detail-badge">Node Mailer</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ecommerce Store <br></br>(Kacha Bazar)</h5>
                  </div>
                  <a className="ad-btn" href="https://kachabazar-store-nine.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Fifth Project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={img5} alt="project5" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Ecommerce Cake-app<br></br> Sweet Cakes</h5>

                  </div>
                  <a className="ad-btn" href="https://github.com/mehranulhassan/cakesapp">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Sixth Project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend & Backend</span>
                  <img src={img6} alt="project6" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Node js</span>
                  <span className="card-detail-badge">Model and Migrations</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">To-do app</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/mehranulhassan/Todos-app">
                    View
                  </a>
                </div>
              </div>
            </div>

          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
