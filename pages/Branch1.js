import React from "react";
// import useSWR from 'swr';
import Layout from "../components/layouts/Layout";

const Branch1 = ({ data_header, director_data }) => {
  return (
    <Layout>
      <div className="about directer_media">
        <div className="container">
          <div className="info">
            <div className="director">
              <div className="directorinfo" sm="8">
                <div className="location_header">
                  <h3>
                    {
                      // director_data?.data?.length > 0
                      //   ? director_data?.data[1]?.message
                      //   : 
                      "Powerhouse road Semra Gate, bhopal, 462010"}
                  </h3>
                  <p style={{ fontSize: "1.05rem", textAlign: "justify", color: "#000000" }}>
                    {
                      // director_data?.data?.length > 0
                      // ? director_data?.data[1]?.description
                      //   :
                      `The Mother Convent School is located at ,powerhouse road, bhopal Jn., bhopal, 462010
                      - Semra Gate, bhopal 462010 , Madhya Pradesh 462003,  in a spacious building. The institution is imparting education to the students on the lines of Public Schools. The emphasis is on providing the child with an environment conducive to his growth where he finds his own talents & develops them to reach the pinnacle of success. We propose to offer the curriculum as prescribed by M.P. Board of Secondary Education, Madhya Pradesh.`}
                  </p>
                  <p style={{ color: "#000000" }}>Our innovative methodology of education facilities natural learning process rather than factory style education. Mother Convent School implements child centred pedagoly besides aiming to raise its bar in all speheres. In fact, it dovetails the traditional and successful teaching practices with modern trends to inspire a generation that seeks variations. A good school education must help to spot the talent early on and guide the student to make full use of it. mother Convent School has bench marked itself as an institution par excellence which is fully geared to nurture students and enable them to meet the specific needs of the future. The increasingly dynamic world has forced traditional pedagogy to adapt the latest technologies in teachings. We are quite sensitive to this, for we believe that only those who are ready to change will be able to survive and succeed. However, we must ensure that while we keep pace with the changes, our cultural roots are not forgotten. We at Mother ConventSchool recognise the crucial importance of quality education in the early years as one third of life's chances come from the environment and experiences of first six years of the life.The innovative approach and matchless infrastructure of Mother ConventSchool, helps the students reach their fullest academic, physical and spiritual potential. The school empowers them to face challenges of the future with confidence and enthusiasm. We look forward to an active partnership with caring parents in our endeavour of shaping the unique personality of the child.</p>
                </div>
              </div>

              <div className="directorimg" sm="4">
                <div className="thennow">
                  <img
                    src={
                      // director_data?.data?.length > 0
                      //   ? director_data?.data[1]?.photo?.data?.full_url
                      //   : 
                      "/placeholder/principal.jpg"
                    }
                    alt="director"
                    style={{ width: "110%", height: "350px" }}
                  />
                  {/* <h2 className="text-center">
                                        <b> {director_data?.data?.length > 0 ? director_data?.data[1]?.full_name : "Main branch principal"} </b>
                                    </h2> */}
                  <h4>
                    Disc Code: 23320300908 <br></br><br></br>
                    School Code : 632205
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Branch1;

// export async function getStaticProps(context) {
//     let data_header

//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

//         data_header = await response.json()
//     }
//     catch (error) {
//         data_header = false
//     }

//     // /////////////////////////////

//     let director_data
//     try {
//         const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/faculty?status=published&fields=*.*`)
//         director_data = await response1.json()
//     }
//     catch (error) {
//         director_data = false
//     }

//     return {
//         props: { data_header, director_data },
//         revalidate: 1, // will be passed to the page component as props
//     }
// }
