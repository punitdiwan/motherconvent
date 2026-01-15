import React from 'react'
import Layout from "../components/layouts/Layout";
import InstagramPost from '@/components/InstaVideoEmbed';

const GalleryVideos = ({gallery_data}) => {
    const videoLinks = [
  
        "https://www.instagram.com/reel/DNDXB8YPHUT/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DM0HHYAvfUE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DM0EUv_vgJN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

        ];

  // console.log(gallery_data.data,"gall vid")
  // if (!gallery_data || !gallery_data.data) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
    <Layout>
     <div style={{ padding: '2rem' ,width:"100%",height:"auto"}}>
      <h2 style={{backgroundColor:"#030d49",fontFamily: "Exo 2 sans-serif",fontWeight:"300"}} className='py-2 px-4 text-white mb-4 ' >School Video Gallery</h2>
     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center", gap: '30px' ,marginTop:"40px"}} className='w-[150px] md:w-[300px]'>
        {videoLinks.map((item) => (
        <InstagramPost key={item.id} url={item.videourl} />
      ))}
      </div>
    </div>
    </Layout>
    </>
  )
}

export default GalleryVideos


// export async function getStaticProps(context) {
//   let gallery_data;
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const schoolName = process.env.NEXT_PUBLIC_SCHOOL;

//   try {
//     const response1 = await fetch(
//       `${baseUrl}/${schoolName}/items/videos?fields=*.*`
//     );
//     gallery_data = await response1.json();
//   } catch (error) {
//     gallery_data = false;
//   }

//   return {
//     props: {  gallery_data },
//     revalidate: 1,
//   };
// }
