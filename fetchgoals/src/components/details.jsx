import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"

export function Details(props) {
	const [data,setData] = useState([])
    const [id, setID] = useState(1);
    const pageId = useParams().id; 
    id != pageId ? setID(pageId) : ""

	useEffect(async () => {
		const url = ("https://api.mediehuset.net/sdg/goals/" + id)
		const result = await axios.get(url)
		setData(result.data.item)
	}, [id]);

	return (
        <>
            <img src={data.image} alt="" />
            <h2>{data.title}</h2>
            <h6>{data.byline}</h6>
            <p>{data.description}</p>
            <div dangerouslySetInnerHTML={{__html: data.icon}}></div>
            <ul>
                {data?.targets?.map((item, index)=>{
                    return <li key={index}>{item.title}: {item.description}</li>
                })}
            </ul>

        </>
	);
}

