'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Socialicon from "./Socialicon";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import useSWR from 'swr';





function Header() {
  // const [menu,setMenu]=useState(false);
  function toggleMenu() {
  //  setMenu(!menu)
    let nav = document.querySelector(".nav");
    let toggle = document.querySelector(".toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
    const x = document.getElementById("navigation");
    console.log("x.style.display",x.style.display);
    
    if (x.style.display === "none") {
      x.style.display = "block";
      // x.style.position = "absolute";
      // x.style.background = "#002a5c";
      // x.style.zIndex = "100";
      // x.style.width = "94%";
    } else if (x.style.display === "block") {
      x.style.display = "none";

    } else {
      x.style.display = "block";
    }

    document.getElementById("navbar").style.float = "left";
  }


  return (
    
    <>




      <div className="header">
      {/* <div className="top-bar">
    <div className="top-bar-icon">
      <Link href="https://www.facebook.com/p/May-flower-public-school-bhopal-100057544926014/" target="_blank">
        <FaFacebookF color="white" size={20} />
      </Link>
      <Link href="https://www.instagram.com/mayflower2481?igsh=MThwbDlybTJrNHJh" target="_blank">
        <IoLogoInstagram color="white" size={20} />
      </Link>
      <Link href="https://www.youtube.com/@mayflowerpublicschool6381" target="_blank">
        <FaYoutube color="white" size={20} />
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <div><FaPhone color="white" size={20} /></div>
      <div style={{ marginTop: 20 }}>
        <p style={{ color: 'white', textAlign: 'center', marginRight: '20px' }}>
          +91 7552770499
        </p>
      </div>
    </div>
  </div> */}



        <div className="bg-img" >





          <div className="contant">
            <div className="container-fluid" >
                  <div className="row header-row">
          
                <div className="col-lg-1 " style={{}}>
                <div className="header-logo-img" >
                        <img src="./images/mothr2.png" style={{width:'100%',height:'100%',marginBottom:'20px'}}></img>

                      </div>
                </div>
                <div className="col-lg-5 scl" >
                  <div>

                    <span style={{
}}>MOTHER CONVENT SCHOOL</span>
                  
                  {/* <p class="px-3 d-flex justify-content-center " style={{fontSize: '16px',  color: '#fff',
    fontWeight: "1000",}}>your child deserves the best education.</p> */}
                  </div>
         
                    </div>
                

                    <div className="col-lg-5 sty-contact">
  <p className="text-center" style={{marginTop:'50px',marginLeft:'30px'}}>Mother Convent School,  powerhouse road, bhopal Jn., bhopal, 462010
                - Semra Gate, bhopal, 462010</p>
                    </div>
            
              </div>
            </div>







            <div className="icons">
              <ul>
                <Socialicon />
              </ul>
            </div>

            <div className="toggle" onClick={toggleMenu} style={{  }}>
              &nbsp;
              <FontAwesomeIcon icon={faBars} />
              <span>&ensp;MENU</span>
            </div>
            <div className="container-fluid bg-light" style={{backgroundColor:'#fff',marginTop:'20px' }}>
            <div className="nav" id="navbar" style={{ color: "#030d49",  lineHeight: "25px" }}>
              <ul className="text-center" id="navigation" style={{marginTop:'10px', }}>
                <li>
                  <Link href="/" style={{ color: "#030d49", backgroundColor: "#fff",}}>Home</Link>&ensp;|&ensp;
                </li>

                <li>
                  <button className="dropdownbtn" style={{ color: "#030d49", backgroundColor: "#fff" }}>
                    About Us <FontAwesomeIcon icon={faCaretDown} />
                    <div className="dropdownmenu">

                      <li>
                        <Link href="/Chairman">Chairman's Desk</Link>
                      </li>
                      <li>
                        <Link href="/Principal">principal's desk</Link>
                      </li>
                      <li>
                        <Link href="/Director">Admin</Link>
                      </li>
{/*                       <li>
                        <Link href="/FacultysMain">Faculty</Link>
                      </li> */}
                    </div>
                  </button>
                  &ensp;|&ensp;
                </li>
                <li>
                  <button className="dropdownbtn" style={{ color: "#030d49" }}>
                    Branches <FontAwesomeIcon icon={faCaretDown} />
                    <div className="dropdownmenu">
                      <li>
                        <Link href="/Branch1">Semra Gate</Link>
                      </li>
                      <li>
                        <Link href="/Branch2">Bhopal Junction</Link>
                      </li>
                    </div>
                  </button>
                  &ensp;|&ensp;
                </li>

                <li>
                  <button className="dropdownbtn" style={{ color: "#030d49" }}>
                    Facilities <FontAwesomeIcon icon={faCaretDown} />
                    <div className="dropdownmenu" >
                      <li>
                        <Link href="/AcademicFacilities">
                          Academic Facilities
                        </Link>
                      </li>
{/*                       <li>
                        <Link href="/Activities">Curriculum Overview</Link>
                      </li>  */}
                    </div>
                  </button>
                  &ensp;|&ensp;
                </li>
                <li>
                  <button className="dropdownbtn" style={{ color: "#030d49" }}>
                    ACADEMICS <FontAwesomeIcon icon={faCaretDown} />
                    <div className="dropdownmenu">
                      <li>
                        <Link href="/AdmissionProcess">
                          Admission Process
                        </Link>
                      </li>
                    </div>
                  </button>
                  &ensp;|&ensp;
                </li>

                {/* <li >
                  <Link href="/Gallery" style={{ color: "#030d49" }}>Gallery &ensp;&ensp;</Link>
                </li> */}
                <li>
                  <button className="dropdownbtn" style={{ color: "#030d49" }}>
                    Media <FontAwesomeIcon icon={faCaretDown} />
                    <div className="dropdownmenu">
                      <li>
                        <Link href="/Gallery">Photos</Link>
                      </li>
{/*                       <li>
                        <Link href="/GalleryVideos">Videos</Link>
                      </li> */}
                    </div>
                  </button>
                  &ensp;|&ensp;
                </li>


                <li>
                  <Link href="/Rules" style={{ color: "#030d49" }}>Rules</Link>
                  &ensp;|&ensp;
                </li>

                <li>
                  <Link href="/ContactUs" style={{ color: "#030d49" }}>Contact us</Link>
                </li>
              </ul>
            </div>

            </div>
           
            
            
          </div>
        </div >
      </div >




    </>
  );
};

const HeaderLogo = () => (
  <div className="header_logo">
    <img src="./images/mothr2.png" alt="Logo" />
  </div>
);





export default Header;






