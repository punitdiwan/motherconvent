import React from 'react';
import { FaUserGraduate, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

function Trust() {
  return (
    <>
      <div id="video">
        <div className="container-fluid trust">
          <div className="py-3">
            <div className="row">
              <div className="col-sm-6">
{/*                 <video
                controls
                  poster="/images/kotraschool.jpeg"
                  style={{ width: '100%', height: '400px' }}
                >
                  <source src="/videos/schoolvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>   
 */}
              </div>
              <div className="col-sm-6">
                <h2>WHY TRUST US</h2>

                <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
                  <FaUserGraduate
                    style={{
                      color: 'rgb(94 170 212)',
                      fontSize: '5.3rem',
                      paddingLeft: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />
                  <h4 style={{ marginLeft: '10px' }}>High standards in value education</h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
                  <FaShieldAlt
                    style={{
                      color: 'rgb(94 170 212)',
                      fontSize: '5.3rem',
                      paddingLeft: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />
                  <h4 style={{ marginLeft: '10px' }}>Safety and Discipline</h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
                  <FaBookOpen
                    style={{
                      color: 'rgb(94 170 212)',
                      fontSize: '5.3rem',
                      paddingLeft: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />
                  <h4 style={{ marginLeft: '10px' }}> Highest standards of academic  </h4>
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
                  <FaBookOpen
                    style={{
                      color: 'rgb(94 170 212)',
                      fontSize: '5.7rem',
                      paddingLeft: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />
                  <h4 style={{ marginLeft: '10px' }}>
                    Highest standards of academic and sporting excellence
                  </h4>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trust;
