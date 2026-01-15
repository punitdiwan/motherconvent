const Vissionmission = () => {
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return (
      <>
        <section>
          <div className="container-fluid mb-20">
            <div className="container">
              {/* Vision Section */}
              <div className="row">
            
                <div className="col-lg-6" style={{ marginTop: '30px' }}>
                  <h2 style={{fontSize: '35px;', textAlign:'center',backgroundColor:'#030d49',color:'#fff',padding:'10px', marginTop:'10px',marginBottom:'10px'}}>OUR VISION</h2>
                  <p style={{
                    fontSize:'20px',opacity:'0.8'
                  }}>
                    "Our vision is to create a learning community where every
                    student is inspired to achieve their full potential, become
                    lifelong learners, and contribute positively to society."
                  </p>
                  <p style={{
                    fontSize:'20px',opacity:'0.8'
                  }}>At our school, we strive to cultivate a lifelong passion for learning, combining quality education with character development. Nestled within lush green surroundings, our state-of-the-art facilities create an environment that nurtures the holistic growth of every student.</p>
                  <p style={{
                    fontSize:'20px',opacity:'0.8'
                  }}>At our school, we strive to cultivate a lifelong passion for learning, combining quality education with character development. Nestled within lush green surroundings, our state-of-the-art facilities create an environment that nurtures the holistic growth of every student.</p>
                </div>
                <div className="col-lg-6" style={{ marginTop: '30px' }}>
                  <div
                    style={{

                 
                     

                      marginTop: '20px',
                      border: '10px solid  #030d49',
                      borderRadius: ' 29px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={`${baseUrl}/uploads/mayflower/originals/e6e1cccc-bf5d-482a-9579-588f2d119735.jpeg`}
                      style={{ width: '100%' }}
                      alt="Vision"
                    />
                  </div>
                </div>


               
              </div>
  
              {/* Mission Section */}
              <div className="row">

           
              <div className="col-lg-6" style={{ marginTop: '30px' }}>
                  <div
                    className="about-img"
                    style={{
                        marginTop: '20px',
                        border: '10px solid  #030d49',
                        borderRadius: '29px',
                        overflow: 'hidden',
                      }}
                  >
                    <img
                      src={`${baseUrl}/uploads/mayflower/originals/e6e1cccc-bf5d-482a-9579-588f2d119735.jpeg`}
                      style={{ width: '100%' }}
                      alt="Mission"
                    />
                  </div>
                </div>
                <div className="col-lg-6" style={{ marginTop: '30px' }}>
                  <h2 style={{fontSize: '35px;', textAlign:'center',backgroundColor:'#030d49',color:'#fff',padding:'10px',marginTop:'10px',marginBottom:'10px'}}>OUR MISSION</h2>
                  <p style={{
                    fontSize:'20px',opacity:'0.8'
                  }}>
                    "Our mission is to provide a high-quality education that
                    nurtures the holistic development of students, promotes
                    critical thinking, fosters creativity, and instills values of
                    respect, integrity, and empathy."
                  </p>
                  <p style={{
                    fontSize:'20px',opacity:'0.8'
                  }}>
                    "Our mission is to provide a high-quality education that
                    nurtures the holistic development of students, promotes
                    critical thinking, fosters creativity, and instills values of
                    respect, integrity, and empathy."
                  </p>
                  <p style={{
                    fontSize:'20px',opacity:'0.8'
                  }}>
                    "Our mission is to provide a high-quality education that
                    nurtures the holistic development of students, promotes
                    critical thinking, fosters creativity, and instills values of
                    respect, integrity, and empathy."
                  </p>
                  <h5>
                    <b style={{color:'#030d49'}}>SCHOOL MOTTO</b>
                  </h5>
                  <h5>
                    <b style={{color:'#030d49'}}>"THE FEAR OF GOD IS THE BEGINNING OF WISDOM."</b>
                  </h5>
                </div>
  
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Vissionmission;
  