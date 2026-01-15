import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useSWR from 'swr';
import Layout from '../components/layouts/Layout'

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Faculty() {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const schoolName = process.env.NEXT_PUBLIC_SCHOOL;

    const url = `${baseUrl}/${schoolName}/items/faculty?fields=*.*.*`;
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div></div>
    }
    if (!data) {
        return <div>No Data...</div>
    }
    return (

        <Layout>
            <div className='about' style={{ background: 'none' }}>
                <div className='container location_header' style={{ marginTop: '10rem' }}>

                    <h3>FACULTY</h3>
                    <div className='facultygrid'>

                        <div className='cardgrid1'>

                            {data.data.map((item, i) => {
                                return <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div>
                                                <img className='img-fluid' src={item.photo.data.full_url} alt="facylty" />
                                                <h4 className="card-title">{item.full_name}</h4>
                                                <p className="card-text">{item.position}</p>
                                                <button style={{ color: '#fff', border: 'none', fontSize: '15px', padding: '.25rem .5rem', borderRadius: '5px', backgroundColor: '#3f5a74', borderColor: '#3f5a74' }}><FontAwesomeIcon icon={faPlus} /></button>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4 className="card-title">{item.full_name}</h4>
                                            <p className='card-text-back'>{item.description}</p>

                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>

                    </div>


                </div>
            </div>

        </Layout>

    )
}

export default Faculty
