import React from 'react'
import Layout from '../components/layouts/Layout'
import Link from 'next/link'

function Activities() {
    return (
        <Layout>

            <div className='activity'>
                <div className='container'>
                    <div className='activitycontent'>
                        <div className="location_header" style={{ width: "100%" }}>
                            <h3>CURRICULUM OVERVIEW</h3>
                        </div>

                        <h4 style={{ color: "#0063a6", marginLeft: "10px", textAlign:"center" }}>
                            {/* <b>CURRICULUM OVERVIEW:</b> */}
                        </h4>
                        <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                            Our school follows a comprehensive and well-rounded curriculum that covers core subjects like English, Hindi, Urdu, Sanskrit, Mathematics, Science, Social Studies, and more. The curriculum is designed to meet educational standards and provide students with a solid foundation for their future.
                        </h6>
                        <h4 style={{textAlign:'center'}}>KINDERGARTEN</h4>
                        <h5>Subjects:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>Reading, Writing, Math, Hindi, English, Conversation, Aptitude and reasoning, General knowledge
                        </h6>

                        <h5>Skills:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>1. Nurtures the physical, social, emotional and cognitive development. <br></br>
                            2. Strong emphasis on building values.<br></br>
                            3. Spoken English </h6>


                        <h5>Method:</h5>
                        <h6 style={{ fontSize: "17px", padding: "10px", marginBottom: "5px" }}>PLAY BASED LEARNING</h6>

                        <div className='row justify-content-center align-items-center' style={{ height: '60vh' }}>
                            <div className='col-sm-6 d-flex flex-column align-items-center'>
                                <img className='activityimg' src="/images/kindergarten.jpeg" style={{ marginTop: "-5vh" }} />
                            </div>
                        </div>



                        <h4 style={{textAlign:'center'}}>PRIMARY</h4>
                        <h5>Subjects:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>English, Hindi, Math, Science, Social studies, Aptitude and reasoning, Drawing and craft, Cursive writing
                        </h6>

                        <h5>Skills:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>1. Nurtures the physical, social, emotional and cognitive development. <br></br>
                            1. Intellectual, emotional, social, and physical development during their formative years in school.
                            2. Communication, Collaboration, Critical thinking and Creativity.

                        </h6>


                        <h5>Method:</h5>
                        <h6 style={{ fontSize: "17px", padding: "10px", }}>Interactive style of teaching which helps in improving analytical and logical skills.</h6>

                        <div className='row justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/primary.jpeg" style={{ marginTop: "-10vh" }} />
                            </div>
                        </div>

                        <h4 style={{textAlign:'center',marginTop: "5px"}}>MIDDLE</h4>
                        <h5>Subjects:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>English, Hindi, Math, Science, Social studies, Sanskrit, Aptitude and reasoning, Artificial intelligence
                        </h6>

                        <h5> Skills:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>It strives to provide ample scope for holistic i.e. physical, intellectual and social development of students.<br></br>
                            2. Group Discussions to improve communication and reasoning.<br></br>
                            3. Activities to develop practical understanding. <br></br>
                            4. Grooming sessions to develop social skills. </h6>



                        <h5>Method:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>Focused on Experiential Learning</h6>

                        <div className='row justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/middle.jpeg" style={{ marginTop: "-10vh" }} />
                            </div>
                        </div>


                        <h4 style={{textAlign:'center'}}>HIGH SCHOOL</h4>
                        <h5>Subjects:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>English, Hindi, Math, Science, Social studies, Sanskrit, Aptitude and reasoning, and Artificial intelligence.</h6>

                        <h5> Skills:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>1. Provide ample scope for physical, intellectual and social development of students. <br></br>
                            2. Nurture Life-Skills by prescribing curricular and co-curricular activities to help improve self-esteem, empathy towards different cultures etc.<br></br>
                        </h6>


                        <h5>Method:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>
                            1. Innovative method of teaching. <br></br>
                            2. Activities to develop competencies, life skills and values.</h6>

                        <div className='row justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/highschool.jpeg" style={{ marginTop: "-10vh" }} />
                            </div>
                        </div>


                        <h4 style={{textAlign:'center'}}>HIGHER SECONDARY</h4>
                        <h5>Science: </h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>    A. English<br></br>
                            B. Hindi <br></br>
                            C. Physics <br></br>
                            D. Chemistry <br></br>
                            E. Math/Biology</h6>

                        <div className='row justify-content-center align-items-center' style={{ height: '60vh' }}>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/science.jpeg" style={{ marginTop: "-10vh" }} />
                            </div>
                        </div>

                        <h5> Commerce:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>    A. English<br></br>
                            B. Hindi <br></br>
                            C. Physics <br></br>
                            D. Chemistry <br></br>
                            E. Economics/Informatic Practice(IP)/Maths</h6>
                     

                        <div className='row justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/commerce.jpeg" style={{ marginTop: "-10vh" }} />
                            </div>
                        </div>

                        <h5> humanities:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>    A. ENGLISH <br></br>
                            B. HINDI <br></br>
                            C. POLITICAL SCIENCE <br></br>
                            D. ECONOMICS <br></br>
                            E. PSYCHOLOGY</h6>

                        <div className='row justify-content-center align-items-center' style={{ height: '60vh' }}>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/humanities.jpeg" style={{ marginTop: "-10vh" }} />
                            </div>
                        </div>

                        <h5>Skills:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>1. Provide ample scope for physical, intellectual and social development of students. <br></br>
                            2. Nurture Life-Skills by prescribing curricular and co-curricular activities to help improve self-esteem, empathy towards different cultures etc.<br></br>
                        </h6>


                        <h5>Method:</h5>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>    1. Innovative method of teaching. <br></br>
                            2. Activities to develop competencies, life skills and values.</h6>


                        {/* 

                        <h6 style={{ fontSize: "17px", padding: "20px" }}>All children are encouraged to pursue some Socially Useful Productive Work (SUPW) apart from their usual academic and other physical activities. These activities are conducted during hobby sessions, which are an integral part of the school curriculum. These activities provide ample opportunity to the children for developing their artistic ability, technical skills and aesthetic sense.</h6>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>The activities also improve the co-ordination of the body and mind and are very important for building a sound physique, an upright and correct posture and for smart deportment, turn out and discipline.</h6>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/w4.jpeg" />
                            </div>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/w5.jpeg" />
                            </div>
                        </div>
                       
                         <h4>Inter-House and Inter-School Activities:</h4>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>Inter-House competitions are regularly held in various co-curricular and extra-curricular activities. These competitions give the children ample opportunity to display their skills and are conducted through activities such as House Shows (cultural programmes), Poem Recitations, Story Telling, Debates, Declamations, Quiz, Rangoli, Dancing, Group Singing, Mass PT, Orchestra etc.</h6>
                       */}

                        {/*       <div className='row'>
                            <div className='col-sm-3'>
                                <img className='activityimg1' src="/images/w7.jpeg" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg1' src="/images/w6.jpeg" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg1' src="/images/w1.jpeg" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg1' src="/images/w3.jpeg" />
                            </div>
                        </div>  

                    
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/w2.jpeg" />
                            </div>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/w15.jpeg" />
                            </div>
                        </div>
                        <h4>Camps and excursions:</h4>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>Outdoor camps, treks and tours are organized every year to give the children an opportunity to see the interiors of Himachal Pradesh and Uttaranchal and to get some educational and recreational exposure.</h6>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>These outdoor and adventure activities are important as they offer the children experiences to face the hardships and challenges of life and would also inculcate in them a spirit of adventure and love for wildlife and nature.</h6>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>Camps also provide a splendid opportunity for the teachers to get to know their children better and to understand the other facets of their personality difficult to observe in the classroom.</h6>
                        <h6 style={{ fontSize: "17px", padding: "20px" }}>Likewise, children also learn to communicate with each other and their teachers on a more informal level.</h6>

                        <div className='row'>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/w12.jpeg" />
                            </div>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/w6.jpeg" />
                            </div>
                        </div> */}


                    </div>

                </div>
            </div>
        </Layout >
    )
}

export default Activities
