import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layouts/Layout";

import About from "../components/aboutinfo/About";
// import Vissionmission from "../components/vissionmission/vissionmission";

import Trust from "../components/trust/Trust";
import Eventmain from "../components/newseventsection/Eventmain";
import Schoolfacilities from "../components/schoolfacilities/Schoolfacilities";
import Study from "../components/study/studymayfower";
import Schoolgallery from "../components/schoolgallery/Schoolgallery";
import Carouselswr from "../components/carousel/Carouselswr";

export default function Home({
  data_header,
  slider_data,
  about_data,
  gallery_data,
}) {
  return (
    <div>
      {/* <link
        rel="preload"
        href="../public/Fontin_Sans_SC_45b.otf"
        as="font"
        crossOrigin=""
      /> */}
      
      <Layout data_header={data_header}>
      <Carouselswr slider_data={slider_data} />
        <About about_data={about_data} />
      
   {/* <Vissionmission></Vissionmission> */}
   <Trust></Trust>
   <Eventmain></Eventmain>
<Schoolfacilities></Schoolfacilities>
   <Study></Study>
   <Schoolgallery></Schoolgallery>

      </Layout>
   
    </div>
  );
}

// export async function getStaticProps(context) {
//   let data_header;
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const schoolName = process.env.NEXT_PUBLIC_SCHOOL;
//   try {
//     alert(data_header)
//     const response = await fetch(
//       `${baseUrl}/${schoolName}/items/config?fields=*,logo.data.full_url`
//     );

//     data_header = await response.json();
//     alert(data_header)
//   } catch (error) {
//     data_header = false;
//   }

//   let slider_data;

//   try {
//     const response1 = await fetch(
//       `${baseUrl}/${schoolName}/items/slider?status=published&fields=caption,image.data.full_url`
//     );

//     slider_data = await response1.json();
//   } catch (error) {
//     slider_data = false;
//   }

//   let about_data;

//   try {
//     const response2 = await fetch(
//       `${baseUrl}/${schoolName}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`
//     );

//     about_data = await response2.json();
//   } catch (error) {
//     about_data = false;
//   }

//   let gallery_data;

//   try {
//     const response1 = await fetch(
//       `${baseUrl}/${schoolName}/items/gallery?fields=*.*.*`
//     );

//     gallery_data = await response1.json();
//   } catch (error) {
//     gallery_data = false;
//   }

//   return {
//     props: { data_header, slider_data, about_data, gallery_data },
//     revalidate: 2, // will be passed to the page component as props

  
//   };
// }
