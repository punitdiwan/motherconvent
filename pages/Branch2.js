import React from "react";
// import useSWR from 'swr';
import Layout from "../components/layouts/Layout";

const Branch2 = ({ data_header, director_data }) => {
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
                      // ? director_data?.data[1]?.message        
                      // :
                      "Bhopal junction"}
                  </h3>
                  <p style={{ fontSize: "1.05rem", textAlign: "justify", color: "#000000" }}>
                    {
                      // director_data?.data?.length > 0
                      // ? director_data?.data[1]?.description
                      // :
                      `
                      The Mother Convent School is located at  Phanda Urban New Kasturba (Girls) Govt.Hss Ward No.25 Nagar Nigam, Bhopal, Madhya Pradesh 462030,  in a spacious building. The institution is imparting education to the students on the lines of Public Schools. The emphasis is on providing the child with an environment conducive to his growth where he finds his own talents & develops them to reach the pinnacle of success. We propose to offer the curriculum as prescribed by M.P. Board of Secondary Education, Madhya Pradesh.`}
                  </p>
                  <p style={{ color: "#000000" }}>Our innovative methodology of education facilities natural learning process rather than factory style education. Mother Convent School implements child centred pedagoly besides aiming to raise its bar in all speheres. In fact, it dovetails the traditional and successful teaching practices with modern trends to inspire a generation that seeks variations. A good school education must help to spot the talent early on and guide the student to make full use of it. Mother Convent School has bench marked itself as an institution par excellence which is fully geared to nurture students and enable them to meet the specific needs of the future. The increasingly dynamic world has forced traditional pedagogy to adapt the latest technologies in teachings. We are quite sensitive to this, for we believe that only those who are ready to change will be able to survive and succeed. However, we must ensure that while we keep pace with the changes, our cultural roots are not forgotten. We at Mother Convent School recognise the crucial importance of quality education in the early years as one third of life's chances come from the environment and experiences of first six years of the life.The innovative approach and matchless infrastructure of Mother Convent School, helps the students reach their fullest academic, physical and spiritual potential. The school empowers them to face challenges of the future with confidence and enthusiasm. We look forward to an active partnership with caring parents in our endeavour of shaping the unique personality of the child.</p>
                </div>
              </div>

              <div className="directorimg" sm="4">
                <div className="thennow">
                  <img
                    src={
                      // director_data?.data?.length > 0
                      //   ? director_data?.data[1]?.photo?.data?.full_url
                      //   :
                      "./placeholder/principal.jpg"
                    }
                    alt="director"
                    style={{ width: "110%", height: "350px" }}
                  />
                  {/* <h2 className="text-center">
                    <b>
                      {" "}
                      {director_data?.data?.length > 0
                        ? director_data?.data[1]?.full_name
                        : "Airport Road principal"}{" "}
                    </b>
                  </h2> */}
                  <h4>
                    Disc Code: 23320208505 <br></br><br></br>
                    School Code : 632418
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Branch2;
