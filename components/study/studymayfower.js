


import React, { useState } from 'react';  // Import useState from React
const diseaseTabs = [
    {
      title: "Best School in Bhopal",
      link: "https://drbindras.com/cancer-treatment/",
      image: "placeholder/music.jpg",
      description:
        "Mother Convent School is a vibrant learning community where curiosity thrives, creativity blossoms, and every student is empowered to reach their full potential. We believe in nurturing not only academic excellence but also strong values and a sense of global citizenship..",
      signs: ["Weight loss", "Fatigue", "Lumps", "Skin changes"],
    },
    {
      title: "Academic Excellence",
    //   link: "https://drbindras.com/heart-diseases/",
    image: "/images/tab2.jpg",
      description:
        "Being acknowledged as one of the best schools of Bhopal , We focus on overall development of our children. We have always tried to provide better services and facilities through improved infrastructure and better education by incorporating innovative methods.",
      signs: ["Chest pain", "Short breath", "Swelling", "Fatigue"],
    },
    {
      title: "Holistic Development",
    //   link: "https://drbindras.com/kidney-diseases/",
    image: "/images/tab3.jpeg",
      description:
        "Mother Convent School is a vibrant learning community where curiosity thrives, creativity blossoms, and every student is empowered to reach their full potential. We believe in nurturing not only academic excellence but also strong values and a sense of global citizenship.",
      signs: ["Swelling", "Frequent urination", "High BP", "Fatigue"],
    },
    {
      title: "Ethical Values and Social Responsibility",
    //   link: "https://drbindras.com/female-disorders/",
    image: "/images/tab4.jpeg",
      description:
        "Mother Convent School is a vibrant learning community where curiosity thrives, creativity blossoms, and every student is empowered to reach their full potential. We believe in nurturing not only academic excellence but also strong values and a sense of global citizenship.",
      signs: ["Irregular cycles", "PCOS", "Pain", "Mood swings"],
    },
    {
      title: "Innovation and Technology Integration",
     
      image: "/images/tab5.webp",
      description:
        "Mother Convent School is a vibrant learning community where curiosity thrives, creativity blossoms, and every student is empowered to reach their full potential. We believe in nurturing not only academic excellence but also strong values and a sense of global citizenship.",
      signs: ["Joint pain", "Inflammation", "Fever", "Fatigue"],
    },
 
  ];
  

function Studymayfower() {

    const [activeIndex, setActiveIndex] = useState(0);
    const currentDisease = diseaseTabs[activeIndex];

    return (

       <div id='stusy_mayflower'>
         <section className='stusy_mfs mt-5 mb-5'>
            <div className='elementor-background-overlay'>
        <div className="diseases-container container">
          <div className="row" style={{}} >
            {/* Vertical Tabs */}
          <div className='col-lg-12 mt-5 mb-5'>
          <h1 style={{color:'#fff', fontWeight:'900',textAlign:'center'}}> Why Study at Mother Convent School ?</h1>
          </div>
    
            {/* Content Display */}
            <div className="col-lg-8 mb-5">
              <div className="card shadow-sm">
                <img
                  src={currentDisease.image}
                  className="card-img-top"
                  alt={currentDisease.title}
                  style={{ height: "23rem", objectFit: "cover",backgroundColor:'#ffff' }}
                />
                <div className="card-body" style={{backgroundColor:'#ffff'}}>
                  <h4>{currentDisease.title}</h4>
                  {/* <p>{currentDisease.description}</p> */}
    
                 
                  {/* {currentDisease.signs && currentDisease.signs.length > 0 && (
                    <div className="signs-box p-3 mb-4 rounded">
                      <h5 className="text-white mb-3">Signs & Symptoms</h5>
                      <ul className="signs-list">
                        {currentDisease.signs.map((sign, idx) => (
                          <li key={idx}>{sign}</li>
                        ))}
                      </ul>
                    </div>
                  )} */}
    
                  {/* New Section */}
                  <div className="info-section mt-4">
                    {/* <h2>Understanding Our Approach</h2> */}
                    <p>
                    Being acknowledged as one of the best schools of Bhopal , We focus on overall development of our children. We have always tried to provide better services and facilities through improved infrastructure and better education by incorporating innovative methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <ul className="nav flex-column nav-pills vertical-tabs" style={{marginBottom:'1rem'}}>
                {diseaseTabs.map((disease, index) => (
                  <li
                    key={index}
                    className={`nav-link ${activeIndex === index ? "active" : ""}`}
                   
                  >
                    {disease.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
        </section>
       </div>
      );
    };

export default Studymayfower


