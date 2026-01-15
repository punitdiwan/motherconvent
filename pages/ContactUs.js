import React from "react";

import ContactUsForm from "./ContactUsForm.js"
import Layout from "../components/layouts/Layout";

const ContactUs = ({ data_header, director_data }) => {


  return (
    <>
      <Layout>

        <div className="container-fluid p-4 ">

          <div class="contactmain">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.9300434488664!2d77.42479!3d23.2690807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69ccd42e51d3%3A0xf9df1bc9bf857443!2sMother%20Convent%20Higher%20Secondary%20School!5e1!3m2!1sen!2sin!4v1768372886729!5m2!1sen!2sin"
              // title="school-map"
              className="school-map"
              // style={{
              //   width: "100%",
              //   height: "230px",
              //   border: "5px solid black",
              //   borderRadius: "10px",
              //   marginTop: "250px",

              // }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
          <div className="container-fluid d-flex latest_card_box_ad p-0">
            <div className="contactleft map text-center">


              <ContactUsForm />

            </div>

            <div className="contactright text-left">
              <div className="titlecontact">
                <h4 className="ssss">School</h4>
                <hr />
                <p className="linkwrap">
                  <b className="bbb">Phone : </b>
                  <a className="linkwrap mnc" href="tel:+91 9827295281">+91  9827295281</a>  ,
                  <a className="linkwrap mnc" href="tel:+91  9303814391">+91 9303814391</a>
                </p>
                <p className="linkwrap">
                  <b className="bbb">Address: </b>
                  <span className="linkwrap mnc">
                    Mother Convent School ,
                    Powerhouse road, bhopal Jn., bhopal, 462010
                - Semra Gate, bhopal, 462010                 </span>
                </p>
                <p className="linkwrap">
                  <b className="bbb">Email : </b>
                  <a className="linkwrap mnc" href="mailto:motherconventschool24@gmail.com">  motherconventschool24@gmail.com</a>
                </p>


              </div>

            </div>
          </div>
        </div>

      </Layout>

    </>
  );
};

export default ContactUs;
