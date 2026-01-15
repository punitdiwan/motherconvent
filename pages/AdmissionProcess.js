import React from 'react'
import Layout from '../components/layouts/Layout'

const AdmissionProcess = () => {
    return (
        <Layout>
            <div className="container-fluid media_top">
                <div className="container">
                    <div className="location_header">
                        <h3>Admission Process</h3>
                        <div className="row text-style">

                            <div className="col-md-12">
                                <h4>Rule for Admission</h4>
                                {/* <p><b><em>It is advised to visit the School Campus before seeking admission or registering a child for admission, </em></b> and familiarize yourself in regard to all the rules, facets, aspects and quality of the school.  </p> */}
                                <p style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                                    Admission is purely based on merit. Admissions are to be sought through duly filled-up registration cum admission form, which is to be submitted in the School Office on or before the specified date. As per Government Rules, students above 5 years of age only shall be admitted to class 1. For Higher classes, add one year for each class. No candidates shall be admitted without Transfer Certificate from the last school attended, countersigned by an appropriate authority, and in no case shall a student be permitted to attend classes pending formal admission. If a student comes from an unrecognized school, he/she can be given provisional admission, subject to approval by the educational authorities of the District in which the School is situated. In case of late admission of a student, the fee from the beginning of the First Term shall be charged unless otherwise ordered by the Principal.
                                </p>
                                <p></p>
                            </div>
                            <div className="col-md-12" >
                                <h4>A student may be removed by the school authorities on any of the following grounds:</h4>
                                <p style={{ fontSize: "17px" }}> <ul><li>Behavioral problem.</li></ul></p>
                                <p style={{ fontSize: "17px" }}><ul><li>Moral breach considered serious by the school authorities.</li></ul></p>
                                <p style={{ fontSize: "17px" }}> <ul><li> Failing two times in the same class. </li></ul></p>
                            </div>
                            <div className="col-md-12">
                                <h4>Follow Instructions</h4>
                                <p><ul><li>Issue of Registration form does not guarantee admission.</li></ul></p>
                                <p><ul><li>Registration fee is not refundable.</li></ul></p>
                                <p><ul><li>Registration form is not transferable.</li></ul></p>
                                <p><ul><li>The following documents are to be submitted at the time of final completion of admission</li></ul></p>

                            </div>
                            <div className="col-md-12">
                                <h4>Submission of Documents:</h4>
                                <h5 style={{ fontSize: "17px", padding: "2px" }}>Following Registration, duly filled Application form needs to be submitted along with the documents listed below within 5 days of the registration date.</h5>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>Attested copy of Birth certificate </li></ul></p>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>6 passport size photos of the child and 1 each of the parents                       </li></ul>         </p>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>Copy of Address proof </li></ul></p>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>Vaccination card</li></ul></p>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>Blood group card or report</li></ul></p>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>Copy of Aadhar card</li></ul></p>
                                <p style={{ fontSize: "17px", padding: "2px" }}><ul><li>Cheque Photocopy</li></ul></p>

                            </div>

                            <div className="col-md-12">
                                <h4>Email to :  motherconventschool24@gmail.com</h4>

                            </div>
                            {/* <div className="col-md-12">
                                <h4>Get Admission procedure                                </h4>
                                <ul>
                                    <li> <b><em>For the purpose of registration parents are required to submit the following:</em></b></li>
                                    <li> a) <b><em>Registration fee </em></b> payable as per fee schedule.</li>
                                    <li> b) Duly filled in <b><em>Admission Form</em></b> along with the signed copy of School Rules.</li>
                                    <li> c) Copies of latest <b><em>passport size photographs (2)</em></b> of the child.</li>
                                    <li> d) Attested copy of the <b><em>Aadhar Card</em></b> of the child and both parents.</li>
                                    <li> e) Attested copy of the <b><em>PAN CARD of both the parents.</em></b></li>
                                    <li> f) <b><em>Birth Certificate</em></b> (attested photocopy).</li>
                                    <li> g) <b><em>Last two-year academic record/ mark sheet</em></b> of the child.</li>
                                    <li> h) <b><em>Pre-Board Marks Sheet</em></b> of the previous School (for +2 Stage students only).</li>
                                    <li> i) <b><em>Medical Consent Authorization</em></b> to be furnished by both parents or parent with custody. (Download Document).</li>
                                    <li> <b>(Additional documents for +2 Stage students are listed after a few paragraphs) </b></li>
                                </ul>
                                <br />
                                <h4>Additional Documents to be submitted at the time of Admission:</h4>
                                <p> In addition to the documents submitted at the time of registration, the following are to be submitted at the time of admission for <b><em><u>all</u></em></b> students:</p>
                                <ul>
                                    <li>a) <b><em>Original School Leaving Certificate</em></b> or Transfer Certificate.</li>
                                    <li>b) <b><em>Original Report Card</em></b> of previous class passed.</li>
                                    <li>c) <b><em>Medical Performa</em></b> and physical fitness certificate.</li>

                                </ul>
                            </div>

                            <div className="col-md-12"><br />
                                <h4>Additional Documents required to be submitted for Plus-2 admission:</h4>
                                <p>Documents to be submitted by children seeking admission to the Senior Secondary Stage at the time of admission will be as follows:</p>
                                <ul>
                                    <li>a) Duly filled in <b><em>Admission Form</em></b> for Class XI</li>
                                    <li>b) <b><em>Report Card of Class IX </em></b>(Final)</li>
                                    <li>c) <b><em>Report Card of Class X</em></b> (Pre-Board)</li>
                                    <li>d) Supporting Documents of achievements in Sports/other activities</li>

                                </ul>
                                <br />
                                <p>Documents to be submitted at the time of admission </p>
                                <ul>
                                    <li>a) <b><em>Transfer Certificate</em></b> from the previous School.</li>
                                    <li>b) <b><em>Character Certificate </em></b>and Proof of Birth from the School</li>
                                    <li>c) <b><em>Medical Certificate</em></b> as per School certificate</li>
                                </ul>
                                <p>Documents to be submitted immediately after declaration of result by Secondary School Board: </p>
                                <ul>
                                    <li>a) <b><em>Migration Certificate</em></b> from the Board</li>
                                    <li>b) <b><em>Secondary School Board Marks/Statement</em></b>/ of Class X <b><em>(in Original)</em></b></li>
                                </ul>

                            </div> */}
                            <div className="mb-3 col-md-12">
                                <h4>Download Documents :</h4>
                                {/* <p>The following documents are available for download in PDF format. You will require Adobe Acrobat Reader for viewing and printing these documents. You can download Adobe Acrobat Reader from www.adobe.com</p>
                                <li>1) Admission Form </li>
                                <li>2) Medical Certificate</li> 
                                <li>3) General Rules and Regulations</li>
                                <li>4) Clothing List</li>
                                <li>5) Medical Consent Authorization</li> */}
                            </div>
                        </div>
                        {/* <div className="row">

                            <div className="col-md-6" style={{ backgroundColor: " #e9ecef", padding: "20px" }}>
                                <div className="row">
                                    <div className="col-md-7">
                                        <h5>Admission Form</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="assets/pdf/Admission-Form.pdf" target="_blank"><button type="button" className="text-center btn btn-primary">View / Download</button></a>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-7">
                                        <h5>Clothing List</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="assets/pdf/Clothing-List-2020-21.pdf" target="_blank"><button type="button" className="text-center btn btn-primary">View / Download</button></a>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-7">
                                        <h5>Medical Certificate</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="assets/pdf/Medical-Certificate-for_New_Admission.pdf" target="_blank"><button type="button" className="text-center btn btn-primary">View / Download</button></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" style={{ backgroundColor: " #e9ecef", padding: "20px" }}>
                                <div className="row">
                                    <div className="col-md-7">
                                        <h5>NRI Students Form</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="assets/pdf/NRI-Students-Form.pdf" target="_blank">
                                            <button type="button" className="text-center btn btn-primary">View / Download</button></a>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-7">
                                        <h5>General Rules &amp; Regulations</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="assets/pdf/General-Rules.pdf" target="_blank"><button type="button" className="text-center btn btn-primary">View / Download</button></a>
                                    </div>
                                </div><br />

                                <div className="row">
                                    <div className="col-md-7">
                                        <h5>Medical Consent Authorization</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="assets/pdf/Medical-Consent-Authorization.pdf" target="_blank"><button type="button" className="text-center btn btn-primary">View / Download</button></a>
                                    </div>
                                </div>


                            </div>
                        </div>
                     */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdmissionProcess
