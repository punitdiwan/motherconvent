import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layouts/Layout";
import axios from 'axios';




const FacultysMain = ({ Teacher_data }) => {
  const [Teacher, setTeacher] = useState("");

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const schoolName = process.env.NEXT_PUBLIC_SCHOOL;

//   useEffect(() => {
//     axios.get(`${baseUrl}/${schoolName}/items/facultymain?fields=*.*.*`)
//       .then((response) => {

//         if (response?.data?.data?.length > 0) {

//           setData(response.data.data);
//         } else {
//           setData([]); // Handle empty data gracefully  
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load data.");
//         setLoading(false);
//       });
//   }, []);

//   console.log(data)

 

  useEffect(() => {
    let allsetdata = Teacher_data?.data?.filter(
      (data, i) => data.position == "teacher"
    );

    setTeacher(allsetdata);
  }, []);

  return (
    <Layout>
      <div className="container-fluid media_top">
        <div className="facultycontainer">

          <div className="location_header">
            <h3>Faculty</h3>
          </div>
          <div className="row">
            {Teacher?.length > 0
              ? data.map((item, i) => {
                console.log(item)
                return (
                  <div className="col-sm-4">
                    <div class="flip-card1">
                      <div class="flip-card-inner1">
                        <div class="flip-card-front1">
                          <img
                            src={item?.images?.data?.full_url?.replace('http://', 'https://')}
                            alt="Avatar"
                            style={{
                              width: "155px",
                              height: "190px",
                              borderRadius: "50%",
                            }}
                          />

                          <h4
                            style={{ marginTop: "18px", color: "#004eb5 " }}
                          >
                            {item.full_name}
                          </h4>
                          <h6 style={{ marginTop: "10px" }}>
                            {item?.subject}
                          </h6>
                          <div className="d-flex justify-content-center text-light">
                            <span
                              style={{
                                backgroundColor: "#3f5a74",
                                height: "30px",
                                width: "30px",
                                borderRadius: "4px",
                              }}
                            >
                              <b style={{ fontSize: "20px" }}> +</b>
                            </span>
                          </div>
                        </div>
                        <div class="flip-card-back1">
                          <h4
                            style={{ marginTop: "30px", color: "#004eb5 " }}
                          >
                            {item.full_name}
                          </h4>
                          <p style={{ fontSize: "13px", padding: "20px" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              : data.map((item, i) => {

                return (
                  <div className="col-sm-4">
                    <div class="flip-card1">
                      <div class="flip-card-inner1">
                        <div class="flip-card-front1">
                          <img
                            src={item.images?.data?.full_url?.replace('http://', 'https://')}
                            alt="Avatar"
                            style={{
                              width: "155px",
                              height: "190px",
                              borderRadius: "50%",
                            }}
                          />

                          <h4
                            style={{ marginTop: "18px", color: "#004eb5 " }}
                          >
                            {item.name}
                          </h4>
                          <h6 style={{ marginTop: "10px" }}>
                            {item.subject ? `Subject : ${item.subject}` : `Class = ${item.class}`}
                          </h6>
                          <div className="d-flex justify-content-center text-light">
                            <span
                              style={{
                                // backgroundColor: "#3f5a74",
                                // height: "30px",
                                // width: "30px",
                                color: "black",
                                borderRadius: "4px",
                              }}
                            >
                              Experience : {item?.experience}
                            </span>
                          </div>
                        </div>
                        <div class="flip-card-back1">
                          <h4
                            style={{ marginTop: "30px", color: "#004eb5 " }}
                          >
                            {item.name}
                          </h4>
                          <p style={{ fontSize: "13px", padding: "20px" }}>
                            {item.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacultysMain;

// export async function getStaticProps(context) {
//     let data_header

//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

//         data_header = await response.json()
//     }
//     catch (error) {
//         data_header = false
//     }

// /////////////////////////////////
//     let Teacher_data
//     try {
//         const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/faculty?status=published&fields=*.*`)

//         Teacher_data = await response1.json()
//     }
//     catch (error) {
//         Teacher_data = false
//     }

//     return {
//         props: { data_header, Teacher_data },
//         revalidate: 1,
//     }
// }

// will be passed to the page component as props
