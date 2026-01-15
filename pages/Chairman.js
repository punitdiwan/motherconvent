import React from 'react';
import Layout from '../components/layouts/Layout';

const Chairman = ({ data_header, chairman_data }) => {
    // Default values if data is missing
    const chairman = chairman_data?.data?.[2] || {};
    const message = chairman?.message || "Our Chairman :";
    const photoUrl = chairman?.photo?.data?.full_url?.replace('http://', 'https://') || "/images/demo1.jpg";
    const fullName = chairman?.full_name || "Demo Name";
    const description = chairman?.description || "";

    return (
        <Layout>
            <div className="about chairman_media">
                <div className="container">
                    <div className="info">
                        <div className="director">
                            <div></div>
                            <div className="directorinfo location_header">
                                <h3>ABOUT CHAIRMAN</h3>                            
                                {/* <p
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                /> */}

                                <h3>{message}</h3>
                                <div className="directorimg">
                                    <img
                                        src={photoUrl}
                                        alt="chairman"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                    <h2 className="text-center">
                                        <b> Mr. Naresh Mehta </b>
                                    </h2>
                                </div>

                                <p style={{ color: "#000000", padding: "20px" }}>
                                    We  at MOTHER CONVENT  School  Education should bring out the perfection which is already present in each child. An institution should provide an environment which helps the child in achieving this perfection. It should help them to develop his inherent qualities and all the aspects of his personality. This can be achieved when those involved in this process realize that education.

                                    Our goal is to provide quality comprehensive and affordable school education to all individuals in safe and comfortable environment I belive in our school motto.

                                    "A fear of God is the beginning of wisdom"
                                </p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Chairman;

// export async function getStaticProps() {
//     let data_header;
//      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//     const schoolName = process.env.NEXT_PUBLIC_SCHOOL;
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`);
//         data_header = await response.json();
//     } catch (error) {
//         data_header = false;
//     }

//     let chairman_data;
//     try {
//         const response1 = await fetch(`${baseUrl}/${schoolName}/items/faculty1?fields=*.*.*`);
//         chairman_data = await response1.json();
//     } catch (error) {
//         chairman_data = false;
//     }

//     return {
//         props: { data_header, chairman_data },
//         revalidate: 1, // will be passed to the page component as props
//     };
// }
