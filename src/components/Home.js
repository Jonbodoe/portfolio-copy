import React from 'react';
import Footer from "./Footer.js";
import logosImg from "../img/logos.png";

import workCategory from "../assets/home/workCategories"
import Contact from "./Contact";


const Home = (anchor) => {
  // console.log(location)

  // works.forEach(work => console.log(work.mainImg))

  return <React.Fragment>
    <div className="page container-fluid no-padding">
      <section id="heading" className="container-fluid p-5 shadow-md">
        <div className="row h-100">
          <div className="col-md-8">
          </div>
          <div className="col-md-4 d-flex justify-content-center h-100 ">
            <div className="align-self-center text-white py-5">
              <h1 className="font-weight-bolder border-bottom-white">Jonathan Le</h1>
              <h3 className="text-secondary">
                &lt; Web Developer & Designer /&gt;
            </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="spacer"><h1 className="font-weight-bolder">ABOUT</h1></div> */}
      <section className="container">
        <div className="row">
          {/* <div className="col-md-1 bg-white"></div> */}
          <div id="self" className="col-md-6 shadow-md">
            {/* <img className="img-jon box-shadow-orange" src={jonLogo} alt="logo of myself"/> */}
          </div>
          <div className="col-md-6 align-self-center justify-content-center h-100 p-5">
            <div className="py-4">
              <h1 className="font-weight-bolder px-md-5">About Me</h1>
              <h3 className="font-weight-bolder px-md-5 text-primary">Hey There!</h3>
              <p className="px-md-5">
                I am currently a Junior at Thomas Jefferson
                Univeristy studying Web Development and Design.
                I like having fun with the things that I build and
                make, and I also enjoy biking and skating around 
                the Philadelphia area!
          </p>
            </div>
          </div>
          {/* <div className="col-md-1 bg-white"></div> */}
        </div>
      </section>
      <section id="tech" className="container-fluid">
        <div className="row h-100 bg-primary p-5">
          <div className="col-md-1"></div>
          <div className="col-md-5 align-self-center">
            <div className="p-sm-4">
              <h1 className="font-weight-bolder text-white">Tools I Use</h1>
              <h3 className="font-weight-bolder text-dark">Web Languages & Frameworks</h3>
              <p className="text-light">
                For web-based digital products, I actively use Bootstrap, JavaScript, React, JQuery, PHP and MySQL to build responsive and dynamic web applications.
            </p>
            </div>
          </div>
          <div className="col-md-6 d-flex h-100 p-sm-5">
            <img id="webLogos" className="align-self-center" src={logosImg} alt="logos of react.js, MySQL, php, Javascript" />
          </div>
          {/* {logos} */}
          {/* <div className="col-md-1 "></div> */}
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="py-5">
          <h1 className="text-center font-weight-bolder">Works</h1>
          <h3 className="text-primary text-center font-weight-bold">school works to personal projects</h3>
        </div>
        <div className="row pb-4 justify-content-around">
          {workCategory}
        </div>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer />
    </div>

  </React.Fragment>;
}
export default Home;
