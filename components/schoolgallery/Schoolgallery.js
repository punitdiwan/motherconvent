import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w1.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w2.jpeg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w3.jpeg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w4.jpeg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w5.jpeg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w6.jpeg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w7.jpeg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholderw8.jpeg"
      onDragStart={handleDragStart}
      class="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w9.jpeg"
      onDragStart={handleDragStart}
      class="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/placeholder/w10.jpeg"
      onDragStart={handleDragStart}
      class="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
];

const slides = [
  { title: "./placeholder/w6.jpeg", description: "View Gallery" },
  { title: "./placeholder/w7.jpeg", description: "View Gallery" },
  { title: "./placeholder/w7.jpeg", description: "View Gallery" },
  { title: "./placeholder/w7.jpeg", description: "View Gallery" },
  { title: "./placeholder/w7.jpeg", description: "View Gallery" },
  { title: "./placeholder/w7.jpeg", description: "View Gallery" },
];
const Schoolgallery = ({ }) => {

  const responsive = {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 5,
    },


  };
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  return (
    <div className="py-4 schoolgallery " style={{ padding: "20px" }}>
      <h3 className="text-center">
        <b> Mother Convent School Gallery </b>
      </h3>

      <div className="container-fluid">

        <div className="row">
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art1.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art2.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art3.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art4.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>

        </div>
        <div className="row mt-3">
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art5.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art6.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art7.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="scl-gallery">
              <img src={'./placeholder/art8.jpg'} style={{ width: '100%', height: '200px' }}></img>
            </div>
          </div>
          <div className="mt-3 text-center ">
            <Link href="/Gallery">
              <button
                style={{
                  color: " #212529",
                  backgroundColor: "#94d1f5",
                  borderColor: "#94d1f5",
                  borderRadius: "5px",
                }}
                className="p-1"
              >
                <FontAwesomeIcon icon={faFolder} />
                &nbsp;View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>









  );
};
export default Schoolgallery;

