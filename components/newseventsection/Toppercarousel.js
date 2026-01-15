

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Placeholder } from "react-bootstrap";

function Toppercarousel() {

  const [data, setdata] = useState("")

  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const schoolName = process.env.NEXT_PUBLIC_SCHOOL;
  // useEffect(() => {
  //   axios.get(`${baseUrl}/${schoolName}/items/toppers?fields=*.*.*`)
  //     .then((response) => {
  //       if (response?.data?.data?.length > 0) {
  //         setdata(response)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })


  // }, [])


  const slides = [
    { title: "", class: 'Demo Class', name: 'Demo Name', subject: 'Demo subject', percent: "percent %" },
    { title: "", class: 'Demo Class', name: 'Demo Name', subject: 'Demo subject', percent: "percent %" },
  ];

  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} style={{ padding: '0px 10px', margin: '5px 5px' }}>


      {data?.data?.data.length > 0 ?
        data?.data?.data.map((item, i) => {
          return <div style={{ background: '#e9e9e9' }} key={i}>
            <center className='toppername'> {item.name} </center>
            <img
              className="d-block"
              src={item?.photo?.data?.full_url?.replace('http://', 'https://')}
              alt="First slide"
              style={{
                width: '85%',
                display: 'flex',
                margin: 'auto',
                justifyContant: 'center',
                height: '220px',
                border: '1px solid #9E9E9E',
                padding: '7px',
                backgroundColor: '#fff',
                borderRadius: '5px'
              }}
            />
            <p className='classpercent'> <b>  {item.class} <br /> {item.subject}  </b></p>
          </div>

        }) : slides.map((item, i) => {
          return <div style={{ background: '#e9e9e9' }} key={i}>
            <center className='toppername'> {item.name} </center>
            <img
              className="d-block"
              src={"placeholder/sf1.jpg"}
              alt="First slide"
              style={{
                width: '85%',
                display: 'flex',
                margin: 'auto',
                justifyContant: 'center',
                height: '220px',
                border: '1px solid #9E9E9E',
                padding: '7px',
                backgroundColor: '#fff',
                borderRadius: '5px'
              }}
            />
            <p className='classpercent'> <b> {item.class} <br /> {item.subject} ({item.percent} ) </b></p>
          </div>

        })

      }

    </Carousel>
  )
}

export default Toppercarousel





// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';






// const Toppercarousel = () => {
//   return (



//     <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false}
//       style={{ padding: '0px 10px', margin: '5px 5px' }}>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>

//         <img
//           className="d-block"
//           src="/images/topper.jpg"
//           alt="First slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>

//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper1.jpg"
//           alt="second slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>

//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper2.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>

//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper3.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>


//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper4.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>


//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper5.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>


//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper6.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>


//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper7.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>


//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper8.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>

//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper9.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>

//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper10.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>

//     </Carousel>


//   );
// }

// export default Toppercarousel;


// import React from 'react'
// import useSWR from 'swr';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// function Toppercarousel() {

//   const fetcher = (...args) => fetch(...args).then(res => res.json());
//   const url = "https://cms.schoolscoop.co.in/myapp/items/toppers?fields=*,photo.*";
//    // const url=  `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/events` 
//   const { data, error } = useSWR(url, fetcher);
//   if (error) {
//     return <div>Error...</div>
//   }
//   if (!data) {
//     return <div>No data...</div>
//   }

//   return (
//     <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} style={{ padding: '0px 10px', margin: '5px 5px' }}>


//       {data.data.map((item, i) => {
//         return <div style={{ background: '#e9e9e9' }} key={i}>
//           <center className='toppername'> {item.name} </center>
//           <img
//             className="d-block"
//             src={item?.photo?.data?.full_url}
//             alt="First slide"
//             style={{
//               width: '85%',
//               display: 'flex',
//               margin: 'auto',
//               justifyContant: 'center',
//               height: '220px',
//               border: '1px solid #9E9E9E',
//               padding: '7px',
//               backgroundColor: '#fff',
//               borderRadius: '5px'
//             }}
//           />
//           <p className='classpercent'> <b>Class {item.class} <br /> {item.subject} ({item.percent}%) </b></p>
//         </div>

//       })}

//     </Carousel>
//   )
// }

// export default Toppercarousel
