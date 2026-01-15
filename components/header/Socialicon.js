import React from 'react'
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());


function Socialicon() {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/myapp/items/top_icons?fields=top_icons.directus_files_id.data.full_url`;
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div></div>
    }
    if (!data) {
        return <div></div>
    }
    return (
        <ul >
            {data.data[0].top_icons.map((items, i) => {
                return <li key={i}>

                    <img src={items.directus_files_id.data.full_url} />
                </li>
            })}
        </ul>
    )
}

export default Socialicon
