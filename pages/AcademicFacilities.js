import React from "react";
import Link from "next/link";
import Layout from "../components/layouts/Layout";

const AcademicFacilities = () => {
  const slides = [
    {
      title: "/images/w1.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/w7.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
  ];
  const slide = [
    {
      title: "/images/w3.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/w8.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
  ];
  const slides1 = [
    {
      title: "/images/w2.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/w5.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/w15.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/w17.jpeg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Rukhmani Devi in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
  ];
  const activities4 = [
    { title: "/placeholder/s1.jpg", },
    { title: "/placeholder/s2.jpg", },
    { title: "/placeholder/s3.jpg", },
    { title: "/placeholder/s4.jpg", },
  ];

  const activities2 = [
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
  ];

  const Special_Features = [
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
  ];

  const library = [
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
  ];

  const laboratory = [
    { title: "/placeholder/s1.jpg", name: "Physics  Laboratory", },
    { title: "/placeholder/s1.jpg", name: "Chemistry Laboratory", },
    { title: "/placeholder/s1.jpg", name: "Biology Laboratory", },
    { title: "/placeholder/s1.jpg", name: "Atal Laboratory", },
  ];

  const games = [
    { title: "/placeholder/s1.jpg", name: "Demo Name", },
    { title: "/placeholder/s2.jpg", name: "Demo Name", },
    { title: "/placeholder/s3.jpg", name: "Demo Name", },
    { title: "/placeholder/s4.jpg", name: "Demo Name", },
  ];

  const artcraft = [
    { title: "/placeholder/artcraft.jpg", name: "Demo Name", },
    { title: "/placeholder/artcraft.jpg", name: "Demo Name", },
    { title: "/placeholder/artcraft.jpg", name: "Demo Name", },

  ];
  const artcraft2 = [
    { title: "/placeholder/artcraft.jpg", name: "Demo Name", },
    { title: "/placeholder/artcraft.jpg", name: "Demo Name", },
    { title: "/placeholder/artcraft.jpg", name: "Demo Name", },

  ];
  const activities4part2 = [
    { title: "/placeholder/s1.jpg", },
    { title: "/placeholder/s1.jpg", },
    { title: "/placeholder/s1.jpg", },
    { title: "/placeholder/s1.jpg", },
  ];
  const activities2part2 = [
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
  ];

  const camps = [
    { title: "/placeholder/camp.jpg", },
    { title: "/placeholder/camp.jpg", },
    { title: "/placeholder/camp.jpg", },
  
  ];

  const music = [
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
    { title: "/placeholder/activity2.jpg", },
    // { title: "/images/w6.jpeg", },
  ];


  return (
    <Layout>
      <div className="container-fluid media_top">
        <div className="container">
          <div
            className="sticky-top position-fixed bg-light text-dark d-flex"
            style={{ marginTop: "150px" }}
          >
            &nbsp;&nbsp;
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "25px", color: "green" }}
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "20px", color: "green" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            &nbsp;
            <span>
              <b>FACILITIES </b>
            </span>
            &nbsp;
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "20px", color: "green" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            &nbsp;
            <span>
              <b> Academic Facilities</b>
            </span>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="location_header" style={{ width: "100%" }}>
            <h3>Facilties</h3>
          </div>
          <div className="row">
            <div className="col-sm-12">

              <br />
              { /*  <div className="row">
                {slides.map((item, i) => {
                  return (
                    <div className="col-sm-6 then-img">
                      <img
                        src={item.title}
                        alt="Avatar"
                        style={{ width: "100%", height: "350px" }}
                      />
                    </div>
                  );
                })}

              </div> */}


              <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center" }}>
                <b>ACADEMICS</b>
              </h4>

              <h5 style={{ color: "#0063a6", marginLeft: "10px" }}>
              AFFILIATION  
              </h5>
              <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>

                Our School is affiliated to the M.P. Board of Secondary Education; Madhya Pradesh and the Sr School is affiliated till the senior secondary level (+2).

              </h6>

              <h5 style={{ color: "#0063a6", marginLeft: "10px" }}>
              SPECIAL FEATURES 
              </h5>
              <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                1. Special methodology for board classes. <br></br>
                A. Extra classes are being conducted for each subject. <br></br>
                B. Three pre boards are taken to provide extra practice. <br></br>
                C. Teachers will be available 24/7 during board examination. <br></br>
                2. Career counselling session on regular bases. <br></br>
                3. Cyber security session for making them aware about the cyber scams. <br></br>
                4. Newly introduced course. <br></br>
                5. Explore how technology is integrated into the learning process to prepare students for the future. Last year we have introduced Artificial Intelligence in Class VI to X. We have also includes subjects such as Aptitude, Reasoning & Artificial Intelligence, which is very relevant in today's world. This will help our students to work with future technologies and for various competitive examinations.



              </h6>
              <br />

              <div className="row">
                      {Special_Features.map((item, i) => {
                        return (
                          <div className="col-sm-6 then-img1">
                            <img
                              src={item.title}
                              alt="Avatar"
                              style={{ width: "100%", height: "350px" }}
                            />
                          </div>
                        );
                      })}
                    </div>


              {/*    <h4 style={{ color: "#0063a6", marginLeft: "10px" }}>
                <b>SCHOOL POLICIES & PROCEDURES:</b>
              </h4>
              <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px" }}>
                Familiarize yourself with important rules, attendance guidelines, and disciplinary procedures. Parents should be concerned about School Uniform, Bag utility, Time Management & Class Activities of their child.              </h6>
              <br />   */}

            </div>
          </div>
          <div className="row">
            {/* {slides.map((item, i) => {
              return (
                <div className="col-sm-6 then-img">
                  <img
                    src={item.title}
                    alt="Avatar"
                    style={{ width: "100%", height: "350px" }}
                  />
                </div>
              );
            })} 


            <div className="row">
              {slides1.map((item, i) => {
                return (
                  <div className="col-sm-3 then-img1">
                    <img
                      src={item.title}
                      alt="Avatar"
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                );
              })}
            </div> */}
            <div className="col-sm-12">


              {/* <h4 style={{ color: "#0063a6" }}>
                <b> Classrooms and Teacher-Student ratio:</b>
              </h4> */}
              <div className="row">
                {/* {slide.map((item, i) => {
                  return (
                    <div className="col-sm-6 then-img">
                      <img
                        src={item.title}
                        alt="Avatar"
                        style={{ width: "100%", height: "350px" }}
                      />
                    </div>
                  );
                })} */}
                <div>
                  {/*  <h6 style={{ color: "#5b5b5b", fontSize: "17px" }}>
                    The classrooms are very modern, large and airy with proper
                    lighting and provide the most conducive atmosphere for
                    learning. All secondary classes in May Flower are
                    interactive classrooms with SMART BOARDS, networked
                    computers and DLP Projectors. Many classrooms have
                    Visualizers as well. The computers are networked on LAN and
                    there is a huge repository of educational software, in
                    various subjects and practically for every chapter in the
                    course of study, available on the school servers. The
                    classrooms are fitted with the latest and best equipment
                    available so that the children get the best teaching aids to
                    assist in making the teaching learning process most
                    effective, through computer-aided-teaching (CAT). The
                    children and teachers alike take keen interest in the
                    beautification and adornment of their classrooms. To achieve
                    the highest levels of academic excellence the school
                    maintains a class-section average strength of just 25 pupils
                    in junior classes and 30 pupils in senior classes.
                  </h6> */}

                  {/*   <p>
                    <b>The teacher-student ratio is a fantastic 1:12. </b>
                  </p> */}

                  {/*   <h4 style={{ color: "#0063a6", marginLeft: "10px" }}>
                    <b>Classrooms and Teacher-Student ratio:</b>
                  </h4> */}

                  {/*  <p style={{ color: "#000000", fontSize: "17px", padding: "20px" }}>
                    The classrooms are very modern, large and airy with proper
                    lighting and provide the most conducive atmosphere for
                    learning. All secondary classes in Scholar's home are
                    interactive classrooms with SMART BOARDS, networked
                    computers and DLP Projectors. Many classrooms have
                    Visualizers as well. The computers are networked on LAN and
                    there is a huge repository of educational software, in
                    various subjects and practically for every chapter in the
                    course of study, available on the school servers. The
                    classrooms are fitted with the latest and best equipment
                    available so that the children get the best teaching aids to
                    assist in making the teaching learning process most
                    effective, through computer-aided-teaching (CAT). The
                    children and teachers alike take keen interest in the
                    beautification and adornment of their classrooms. To achieve
                    the highest levels of academic excellence the school
                    maintains a class-section average strength of just 25 pupils
                    in junior classes and 30 pupils in senior classes.
                  </p> 

                  <div className="row">
                    {slides.map((item, i) => {
                      return (
                        <div className="col-sm-6 then-img">
                          <img
                            src={item.title}
                            alt="Avatar"
                            style={{ width: "100%", height: "350px" }}
                          />
                        </div>
                      );
                    })}
                  </div>  */}
                  <div>

                    <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center"  }}>
                      <b>LIBRARY</b>
                    </h4>
                    <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                      In addition to supporting classroom learning, the library serves as a quiet space for students to explore their interests, enhance their creativity, and develop critical thinking. With the guidance of librarians, students also learn how to find and use information effectively, making the library an essential part of the school experience. It provides students with access to a wide range of books, educational materials, and research tools, helping them improve their knowledge and academic skills.
                    </h6>

                    <div className="row">
                      {library.map((item, i) => {
                        return (
                          <div className="col-sm-6 then-img1">
                            <img
                              src={item.title}
                              alt="Avatar"
                              style={{ width: "100%", height: "350px" }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="">
                      {" "}
                      <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center"  }}>
                        <b>  LABORATORY</b>
                      </h4>
                    </div>
                    <div className="row">


                      <div className="col-sm-12">
                        <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                          Modern and well-equipped science laboratories are available in both schools.The Labs have the requisite essential equipment for conducting practicals for the integrated science course at the secondary school stage, and for the Physics, Chemistry and Biology practicals at the Senior Secondary Stage, as per the requirement of the new curricula and scheme of studies, laid down by the M.P. Board. The students themselves have preserved a large variety of specimens in the laboratories and take keen interest in making science projects.
                        </h6>

                        <div className="row">
                          {laboratory.map((item, i) => {
                            return (
                              <div className="col-sm-3 then-img1">
                                <img
                                  src={item.title}
                                  alt="Avatar"
                                  style={{ width: "100%", height: "200px" }}
                                />
                                <p style={{ textAlign: 'center', marginTop: '10px' }}>{item.name}</p>
                              </div>
                            );
                          })}
                        </div>

                        {/*    <h4 style={{ color: "#0063a6" }}>
                          <b>Evaluation System:</b>
                        </h4>
                        <h6 style={{ color: "#5b5b5b", fontSize: "17px" }}>
                          Over the last few years there has been a countrywide
                          debate amongst pedagogues, parents, teachers and
                          members of various educational boards regarding a
                          change in the evaluation system in schools, which by
                          and large has been received with great enthusiasm.
                          Keeping in view the evaluation systems of developed
                          countries and the opinion of the public at large, the
                          CBSE has introduced the CCE (Continuous and
                          Comprehensive Evaluation) and introduced CGPA and
                          Grading System in schools.
                        </h6>

                        <h4 style={{ color: "#0063a6" }}>
                          <b>Tests and Examinations:</b>
                        </h4>
                        <h6 style={{ color: "#5b5b5b", fontSize: "17px" }}>
                          Over the last few years there has been a countrywide
                          debate amongst pedagogues, parents, teachers and
                          members of various educational boards regarding a
                          change in the evaluation system in schools, which by
                          and large has been received with great enthusiasm.
                          Keeping in view the evaluation systems of developed
                          countries and the opinion of the public at large, the
                          CBSE has introduced the CCE (Continuous and
                          Comprehensive Evaluation) and introduced CGPA and
                          Grading System in schools.
                        </h6>

                       <h4 style={{ color: "#0063a6" }}>
                          <b>Stars:</b>
                        </h4> */}

                        <div className="row">
                          {/* {slides.map((item, i) => {
                            return (
                              <div className="col-sm-6 then-img1">
                                <img
                                  src={item.title}
                                  alt="Avatar"
                                  style={{ width: "100%", height: "350px" }}
                                />
                              </div>
                            );
                          })} */}

                          <div className="col-sm-12">
                            {/*   <h6 style={{ color: "#5b5b5b", fontSize: "17px" }}>
                              Over the last few years there has been a
                              countrywide debate amongst pedagogues, parents,
                              teachers and members of various educational boards
                              regarding a change in the evaluation system in
                              schools, which by and large has been received with
                              great enthusiasm. Keeping in view the evaluation
                              systems of developed countries and the opinion of
                              the public at large, the CBSE has introduced the
                              CCE (Continuous and Comprehensive Evaluation) and
                              introduced CGPA and Grading System in schools.
                            </h6>

                            <h4 style={{ color: "#0063a6" }}>
                              <b>Diamond Star:</b>
                            </h4>
                            <h6 style={{ color: "#5b5b5b", fontSize: "17px" }}>
                              Over the last few years there has been a
                              countrywide debate amongst pedagogues, parents,
                              teachers and members of various educational boards
                              regarding a change in the evaluation system in
                              schools, which by and large has been received with
                              great enthusiasm. Keeping in view the evaluation
                              systems of developed countries and the opinion of
                              the public at large, the CBSE has introduced the
                              CCE (Continuous and Comprehensive Evaluation) and
                              introduced CGPA and Grading System in schools.
                            </h6>   */}

                            <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center"  }}>
                              <b>  GAMES AND SPORTS</b>
                            </h4>
                            <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                              Sports and games are a great way to keep children active and healthy without the need for them to miss out on their academic studies.
                              One of the main purposes of having sports and games in schools is physical development of children.
                              In Mother Convent SCHOOL students are encouraged to participate in a way that suits their interests and abilities so as to develop a variety of skills that will equip them for lifelong participation in regular sport.
                            </h6>
                            <div className="row">
                              {games.map((item, i) => {
                                return (
                                  <div className="col-sm-3 then-img1">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "200px" }}
                                    />
                                  </div>
                                );
                              })}
                            </div>

                            <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center"  }}>
                              <b> MUSIC</b>
                            </h4>
                            <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                              Music has the potential to help students succeed in school, build self-confidence, and create leaders and well-rounded young people.
                              In Mother Convent SCHOOL we encourage students to learn vocal music as well as instruments.
                            </h6>

                            <div className="row">
                              {music.map((item, i) => {
                                return (
                                  <div className="col-sm-6 then-img">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "350px" }}
                                    />
                                  </div>
                                  
                                );
                              })}

                            </div>

                            <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center"  }}>
                              <b> DRAWING AND CRAFT</b>
                            </h4>
                            <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                              Exploring and experimenting with art and craft encourages children to use independent thought. Thus, equipping them with critical thinking skills that are important for later success in both school and life.
                            </h6>

                            <div className="row">
                              {artcraft.map((item, i) => {
                                return (
                                  <div className="col-sm-4 then-img1">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "200px" }}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <div className="row">
                              {artcraft2.map((item, i) => {
                                return (
                                  <div className="col-sm-4 then-img1">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "200px" }}
                                    />
                                  </div>
                                );
                              })}
                            </div>

                            <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center"  }}>
                              <b>PARENT-TEACHERMEETINGS</b>
                            </h4>
                            <h6 style={{ color: "#000000", fontSize: "17px", padding: "20px", textAlign: "justify" }}>
                              We believe in importance of a strong partnership between parents and teachers. Regular parent- teacher conferences and communication channels are in place to keep parents informed about their child's progress and discuss any concerns. You can visit teachers at their meeting time.
                            </h6>

                            <h4 style={{ color: "#0063a6", marginLeft: "10px", fontWeight: "bold",textAlign:'center' }} > CO-CURRICULAR & EXTRA-CURRICULAR ACTIVITIES</h4>
                            <h6></h6>
                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>In addition to academics, we emphasize the importance of extracurricular activities. Students have the opportunity to participate in sports, arts, music, and other activities that promote holistic development according to the activity chosen by the student in CONSENT FORM and it is FREE OF COST.                        </h6>

                            <div className="row">
                              {activities4.map((item, i) => {
                                return (
                                  <div className="col-sm-3 then-img1">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "200px" }}
                                    />
                                  </div>
                                );
                              })}
                            </div>


                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>All children are encouraged to pursue some Socially Useful Productive Work (SUPW) apart from their usual academic and other physical activities. These activities are conducted during hobby sessions, which are an integral part of the school curriculum. These activities provide ample opportunity to the children for developing their artistic ability, technical skills and aesthetic sense.</h6>
                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>The activities also improve the co-ordination of the body and mind and are very important for building a sound physique, an upright and correct posture and for smart deportment, turn out and discipline.</h6>


                            <div className="row">
                              {activities2.map((item, i) => {
                                return (
                                  <div className="col-sm-6 then-img">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "350px" }}
                                    />
                                  </div>
                                );
                              })}

                            </div>

                            <div className="row">
                              {activities4part2.map((item, i) => {
                                return (
                                  <div className="col-sm-3 then-img1">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "200px" }}
                                    />
                                  </div>
                                );
                              })}
                            </div>




                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>Pupils are regularly sent to participate in Inter-School competitions as well.
                              Both the schools have an auditorium each where the children get an opportunity to go onto the stage and perform in various activities so that they may effectively learn the art of public speaking and get rid of stage-fear.</h6>

                            <div className="row">
                              {activities2part2.map((item, i) => {
                                return (
                                  <div className="col-sm-6 then-img">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "350px" }}
                                    />
                                  </div>
                                );
                              })}

                            </div>


                            <h4 style={{ color: "#0063a6", marginLeft: "10px",textAlign:"center" }}><b> CAMPS AND EXCURSIONS</b></h4>
                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>Outdoor camps, treks and tours are organized every year to give the children an opportunity to see the interiors of Himachal Pradesh and Uttaranchal and to get some educational and recreational exposure.</h6>
                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>These outdoor and adventure activities are important as they offer the children experiences to face the hardships and challenges of life and would also inculcate in them a spirit of adventure and love for wildlife and nature.</h6>
                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>Camps also provide a splendid opportunity for the teachers to get to know their children better and to understand the other facets of their personality difficult to observe in the classroom.</h6>
                            <h6 style={{ fontSize: "17px", padding: "20px", textAlign: "justify" }}>Likewise, children also learn to communicate with each other and their teachers on a more informal level.</h6>


                            <div className="row">
                              {camps.map((item, i) => {
                                return (
                                  <div className="col-sm-4 then-img">
                                    <img
                                      src={item.title}
                                      alt="Avatar"
                                      style={{ width: "100%", height: "350px" }}
                                    />
                                  </div>
                                );
                              })}

                            </div>

                            {/* <h4 style={{ color: "#132A5C" }}>
                              <b>Tuitions:</b>
                            </h4>
                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>
                              Over the last few years there has been a
                              countrywide debate amongst pedagogues, parents,
                              teachers and members of various educational boards
                              regarding a change in the evaluation system in
                              schools, which by and large has been received with
                              great enthusiasm. Keeping in view the evaluation
                              systems of developed countries and the opinion of
                              the public at large, the CBSE has introduced the
                              CCE (Continuous and Comprehensive Evaluation) and
                              introduced CGPA and Grading System in schools.
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </Layout >
  );
};

export default AcademicFacilities;
