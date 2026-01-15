import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import moment from 'moment';
import axios from 'axios';

function Newsevent() {
    const [data, setdata] = useState("");
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // const schoolName = process.env.NEXT_PUBLIC_SCHOOL;
    // useEffect(() => {
    //     axios.get(`${baseUrl}/${schoolName}/items/events?fields=*.*.*`)
    //         .then((response) => {
    //             if (response?.data?.data?.length > 0) {
    //                 console.log(response);
    //                 setdata(response);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    const filteredData = [
        { id: 2, created_on: "2020-12-15T05:19:39+00:00", eventdate: "2020-12-23", title: "Books will be available on the specific date." },
        { id: 3, created_on: "2020-12-15T08:52:50+00:00", eventdate: "2020-12-21", title: "Result has been declared" },
        { id: 4, created_on: "2020-12-15T09:29:56+00:00", eventdate: "2020-12-14", title: "Annual function data has been declared" },
        { id: 5, created_on: "2021-07-14T10:19:02+00:00", eventdate: "2021-07-15", title: "Tomorrow is holiday" },
    ];

    return (
        <div>
            <div className='eventinfo'>
                <h3 style={{ textAlign: 'center' }}>News & Events</h3>
                <hr />
                <div className='newsinfo'>
                    <div className="ideaboxNews in-easing in-relative" id="idx1">
                        <ul id="newscontent1" className="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar">
                            <div id="mCSB_1" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside">
                                <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y">
                                    {
                                        data?.data?.data.length > 0 ?
                                            data?.data?.data.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <div className="in-image">
                                                            <div className="tt-b-day rem-border">{item.eventdate.split('-')[2]}
                                                                <div className="tt-b-day-r">
                                                                    <div className="tt-b-month">
                                                                        {moment(item.eventdate.split('-')[1], 'M').format('MMM')}
                                                                    </div>
                                                                    <div className="tt-b-date">
                                                                        {moment(item?.eventdate.split('-')[0]).format('YYYY')}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <span className="in-turquoise"><h6>+ Read more</h6></span>*/}
                                                        </div>
                                                        <div className="in-content" id="nid">{item.title}</div>
                                                    </li>
                                                );
                                            })
                                            :
                                            filteredData.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <div className="in-image">
                                                            <div className="tt-b-day rem-border">{item.eventdate.split('-')[2]}
                                                                <div className="tt-b-day-r">
                                                                    <div className="tt-b-month">
                                                                        {moment(item?.eventdate.split('-')[1], 'M').format('MMM')}
                                                                    </div>
                                                                    <div className="tt-b-date">
                                                                        {moment(item.eventdate.split('-')[0]).format('YYYY')}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="in-turquoise"><h6>+ Read more</h6></span>
                                                        </div>
                                                        <div className="in-content" id="nid">{item.title}</div>
                                                    </li>
                                                );
                                            })
                                    }
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* <button style={{ margin: '10px 0px 0px 0px', backgroundColor: '#4c6578', padding: '5px', borderRadius: '5px', color: '#fff' }}>Read More</button> */}
                </div>
            </div>
        </div>
    );
}

export default Newsevent;
