import React from "react";
import './style.css';

// eslint-disable-next-line

const About = () => {
  return (
    <div
      name="about"
      className="w-full text-white about"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col"id="about">

     
        <div className="pb-8">
        <p className="text-4xl font-bold inline">
  <span className="about-text">About</span>

      
</p>


        </div>

       

        <p className="text-xl mt-5" id="para">

       
        Hello, I'm Aman Verma, and I'm currently pursuing my Bachelor's of Computer Application. My main focus right now is on mastering data structures and algorithms and Web Development.

       
        


I actively participate in coding contests on platforms like CodeChef and LeetCode to improve my problem-solving skills.

 As I prepare for company placements, I'm eager to join a dynamic team and contribute my expertise in Web Development and Data Science to exciting projects. Let's connect and innovate together!
        Iam working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.

      
        </p>

        

        <br />

      

        <p className="text-xl" id="para">
        Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js <br /> <br />
     
        </p>
 
       
       
       
      </div>
    </div>
  );
};

export default About;
