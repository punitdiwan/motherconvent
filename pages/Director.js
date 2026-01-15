import React from 'react';
import Layout from '../components/layouts/Layout';

const Director = ({ data_header, director_data }) => {
  const directors = director_data?.data || [];

  const renderDirector = (index) => {
    const person = directors[index];
    if (!person) return null;

    return (
      <div className='directorinfo' key={index}>
        <div>
          <h3>{person?.message || "Admin's Message"}</h3>
          <div className='directorimg'>
            <div className='thennow'>
              <img
                // src={person?.photo?.data?.full_url?.replace('http://', 'https://') || "/images/a1.jpg"}
                alt='director'
                style={{ width: "110%", height: "350px" }}
              />
              <h2 className="text-center">
                <b>{person?.full_name || "Mrs. Meenakshi Mehta "}</b>
              </h2>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: person?.description || "" }} />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className='about directer_media'>
        <div className='container'>
          <div className='info'>
            <div className='director'>
              {renderDirector(1)}
              {renderDirector(3)}
              {renderDirector(4)}
              {renderDirector(5)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Director;

// export async function getStaticProps() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const schoolName = process.env.NEXT_PUBLIC_SCHOOL;

//   let data_header = false;
//   let director_data = false;

//   try {
//     const response = await fetch(`${baseUrl}/${schoolName}/items/config?fields=*,logo.data.full_url`);
//     data_header = await response.json();
//   } catch (error) {
//     console.error("Header fetch failed:", error);
//   }

//   try {
//     const response1 = await fetch(`${baseUrl}/${schoolName}/items/faculty1?fields=*.*.*`);
//     director_data = await response1.json();
//   } catch (error) {
//     console.error("Director data fetch failed:", error);
//   }

//   return {
//     props: { data_header, director_data },
//     revalidate: 1,
//   };
// }
