import React from "react";
import HeroImage from "../assets/mypic.jpg";
import MyPic from "../assets/heroImage.png";
import './style.css';
import resume from "../assets/resume.pdf"
import Typewriter from "typewriter-effect";

// eslint-disable-next-line






const Home = () => {
  return (

   
    <div
      name="home"
      className="h-screen w-full  home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

      
      <div className="small-screen hidden">
    
          <img
            src={MyPic}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        
        </div>
        <div className="flex flex-col justify-center h-full">

        
          <h2 className="text-4xl sm:text-7xl font-bold text-white" id="full">

            Hi, My Name is <span style={{color:"purple"}} > Aman </span>
          
    
          </h2>
          <p className="text-gray-500 py-4 max-w-md" id="element">

            <Typewriter
  
  onInit={(typewriter) => {
    typewriter
                  .typeString("Full Stack")
                  .callFunction(() => {
                    document.getElementById("element").classList.add("color-blue");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(" web developer")
                  .start();
              }}

  
  />

            
          </p>

       

          <a
        href={resume}
        download="AMAN-VERMA-RESUME"
        target="_blank"
        rel="noreferrer"
      >

         

          <button id="resume-btn">Resume &rarr;</button>
          <button id="resume-btns">Hire Me &rarr;</button>
    

          </a>

          <div className="icons">
  
</div>

          
          

          
        </div>
        <div className="big-screen">

       
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          id="image"/ >
        
        </div>
        
      </div>
    </div>

   
  );
};

export default Home;
