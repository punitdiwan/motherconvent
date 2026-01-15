import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ data_header, gallery_data }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides =
    gallery_data?.data?.length > 0
      ? gallery_data.data.map((item) => ({
          src: item?.photo?.data?.full_url?.replace("http://", "https://"),
        }))
      : [
          { src: "/placeholder/column1.jpg" },
          { src: "/placeholder/column4.jpg" },
          { src: "/placeholder/column6.jpg" },
          { src: "/placeholder/column2.jpg" },
          { src: "/placeholder/column3.jpg" },
          { src: "/placeholder/column5.jpg" },
        ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Layout>
        <div className="container-fluid media_top">
          <div className="mb-3 row">
            {slides.map((item, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-4 col-sm-6"
                onClick={() => handleImageClick(i)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.src}
                  className="mt-3 imght"
                  alt="gallery"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      </Layout>
    </>
  );
};

export default Gallery;

// export async function getStaticProps(context) {
//   let data_header;
//   let gallery_data;
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

//   try {
//     const response1 = await fetch(
//       `${baseUrl}/${schoolName}/items/gallery?fields=*.*.*`
//     );
//     gallery_data = await response1.json();
//   } catch (error) {
//     gallery_data = false;
//   }

//   return {
//     props: { data_header, gallery_data },
//     revalidate: 1,
//   };
// }
