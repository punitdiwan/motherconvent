
import {
  FaPhoneAlt,
  FaHome,
  FaRegImage,
  FaFutbol,
  FaClipboardList,
  FaNetworkWired,
  FaHeart,
  FaEnvelope,
  FaUser,
  FaComment
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="footerbg" id="footer">
        <div className="container">
          <div className="row">

            {/* Left Column - School Info */}
            <div className="col-sm-4">
              <div style={{ paddingTop: "40px" }}>
                <div style={{ display: "flex" }}>
                              {/* Left Column - School Info 

                  <img
                    src="/images/mayflower-logo.jpeg"
                    alt="logo"
                    style={{ height: "53px" }}
                  />
                               Left Column - School Info */}

                  <div style={{ lineHeight: "20px", marginLeft: "1px" }}>
                    <span style={{ fontSize: "19px", fontFamily: "curveFont" }}>
                      Mother Convent School
                    </span>
                    <br />
                    <span
                      style={{ fontSize: "13px", fontFamily: "curveFont" }}
                      className="place"
                    >
                      Bhopal, Madhya Pradesh
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ lineHeight: "1.5rem",marginTop:"10px", fontFamily:"sans-serif"}}>
                   Mother Convent School, established in 1996, is a Co-educational, English medium public school affiliated to the M.P Board of Secondary Education  up to 10th and 12th Grades.  Mother Convent School is a very good school that provides a great environment for learning and growth. Students enjoy coming to school every day because they feel safe, happy, and encouraged to do their best. May Flower School helps students not only in studies but also in becoming confident and responsible individuals.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links */} 
<div className="col-sm-1"></div>

            <div className="col-sm-3">
              <div className="contactus">
                <div id="new-contact">
                  <h5>
                    <span>|&nbsp;</span>
                    <FaNetworkWired />
                    &nbsp;Quick Links
                  </h5>
                  <ul>
                    <li>
                      <Link href="/">
                        <h6 className="new-p">
                  
                          <FaHome /> &nbsp; Home
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Gallery">
                        <h6>
                     
                          <FaRegImage /> &nbsp; Gallery
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Activities">
                        <h6>
                     
                          <FaClipboardList /> &nbsp; Activities
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/AcademicFacilities">
                        <h6>
                     
                          <HiAcademicCap /> &nbsp; Academic Facilities
                        </h6>
                      </Link>
                    </li>

                  </ul>

                  <ul style={{display:'flex',}}>

                  <li><Link href="https://www.facebook.com/p/motherconventschool-bhopal-100057544926014/" target="_blank">
                 <FaFacebookF color="white" size={25} />
      </Link></li>
      <li><Link href="https://www.youtube.com/@motherconventhigherseconda1527" target="_blank">
                 <FaYoutube color="white" size={25}  />
      </Link></li>
      <li><Link href="https://www.instagram.com/mothersconventschool/#" target="_blank">
                <IoLogoInstagram color="white" size={25} />
      </Link></li>
                  </ul>
                </div>

               
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="col-sm-4">
              <div className="contactus">
                <div id="new-contact">
                  <h5>
                    <span>|&nbsp;</span>
                    <FaNetworkWired />
                    &nbsp;Get in touch
                  </h5>
                  <ul className="w-full">
                    <li>
                      {/* <h6 className="new-p">
                        <FaPhoneAlt /> &nbsp; 0755 277 0499
                      </h6> */}
                    </li>
                    <li>
                      <h6>
                        <FaRegImage /> &nbsp; 0755 277 0499
                      </h6>
                    </li>
                    <li className="w-auto ">
                      <h6 style={{wordBreak:"break-word",wordSpacing:"normal"}}>
                        <FaEnvelope /> &nbsp;  motherconventschool1@gmail.com
                      </h6>
                    </li>
                    <li className="w-auto">
                      <h6 className="wrap-text">
                        <FaHome /> &nbsp; Mother Convent School, powerhouse road, bhopal Jn., bhopal, 462010
                - Semra Gate, bhopal, 462010 Madhya Pradesh 462003
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="subfooter">
        <div className="text-center text-light">
          Mother Convent School &nbsp;|&nbsp; Design & Maintained with &nbsp;
          <FaHeart style={{ color: "red" }} /> &nbsp; by&nbsp;
          <a href="http://maitretech.com/" target="_blank" rel="noopener noreferrer">
            maitretech.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// export async function getStaticProps(context) {
//   let data_header;
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const schoolName = process.env.NEXT_PUBLIC_SCHOOL;
//   try {
//     const response = await fetch(
//       `${baseUrl}/${schoolName}/items/config?fields=*,logo.data.full_url`
//     );
//     data_header = await response.json();
//   } catch (error) {
//     data_header = false;
//   }

//   return {
//     props: { data_header },
//     revalidate: 2,
//   };
// }
