import React from "react";

import './style.css';

const Education = () => {
  return (
    <div className="bg-blue-900 text-white py-16" style={{ backgroundColor: "#081b29" }}>
      <div className="container mx-auto px-4">
        
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            My Journey
          </h2>
      

        <div className="max-w-lg">
        
            <div className="mb-8">
              <h3 className="text-xl font-bold">2021-2023</h3>
              <p className="mb-2">BCA Degree - Amravati University</p>
              <p className="mb-2">I earned my BCA degree in computer science from G.H. Raisoni College of Science. Reflecting my dedication to learning and excelling in my field of study.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold">2019-2020</h3>
              <p className="mb-2">HSSC - Dr.B. R. Ambedkar College, Hinganghat</p>
              <p className="mb-2">I completed my Higher Secondary School Certificate (HSSC) with a score of 80.31%.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">2019</h3>
              <p className="mb-2">SSC - Dr.B. R. Ambedkar College, Hinganghat</p>
              <p className="mb-2">I completed my Secondary School Certificate (SSC) with an impressive score of 73.80%.</p>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Education;
