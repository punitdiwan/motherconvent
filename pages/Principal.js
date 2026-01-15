import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';

const Principal = () => {
    // const [principalData, setPrincipalData] = useState(null);

//     useEffect(() => {
//         const fetchPrincipalData = async () => {
//             const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//             const schoolName = process.env.NEXT_PUBLIC_SCHOOL;

//             try {
//                 const response = await fetch(`${baseUrl}/${schoolName}/items/faculty1?fields=*.*.*`);
//                 const data = await response.json();
//                 setPrincipalData(data);
//             } catch (error) {
//                 console.error('Failed to fetch principal data:', error);
//                 setPrincipalData(false);
//             }
//         };

//         fetchPrincipalData();
//     }, []);

    // if (principalData === null) {
    //     return <p>Loading...</p>; // Show loading initially
    // }

    // if (principalData === false) {
    //     return <p>Failed to load data.</p>; // Error fallback
    // }

    // Extracting data safely
    // const chairman = principalData?.data?.[0] || {};
    // const message = chairman?.message || "Our Chairman :";
    // const photoUrl = chairman?.photo?.data?.full_url?.replace('http://', 'https://') || "/images/demo1.jpg";
    // const fullName = chairman?.full_name || "Demo Name";
    // const description = chairman?.description || "";

    return (
        <Layout>
            <div className="about chairman_media">
                <div className="container">
                    <div className="info">
                        <div className="director">
                            <div className="directorinfo location_header">
                                <h3>{"message"}</h3>
                                <div className="directorimg">
                                    <img
                                        src={""}
                                        alt="chairman"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                    <h2 className="text-center">
                                        <b> Mrs. Meenakshi Mehta </b>
                                    </h2>
                                </div>

                                {/* {description && (
                                    <p

                                        dangerouslySetInnerHTML={{ __html: description }}
                                    />
                                )} */}
                                <p>
                                "The whole purpose of education is to turn mirrors into windows."
In MOTHER CONVENT  SCHOOL, Bhopal we see the beauty in variety and are proud to embrace methods that respect and nurture individual talents and aspirations.MOTHER CONVENT  SCHOOL implements child centered pedagogy besides aiming to raise its bar in all spheres. Our child centered curriculum is a teaching approach that focuses on the needs and interests of each child. In this curriculum children take command of their own learning. Teachers are there to provide support and facilitate the child's learning but children determine the direction of their own learning following their natural curiosities, interests and passions.
It is our goal to treat all children with love and care they deserve. We believe in personal relationship between child and the teacher. 
My passion for education has driven me to innovate and implement inclusive approaches that cater to the diverse needs of students. I am committed to ensuring that every child, regardless of their abilities, receives the support and opportunities they need to thrive.



                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Principal;
