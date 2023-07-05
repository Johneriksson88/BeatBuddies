import React, { useEffect, useState, } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
function MoodsPage() {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const { data } = await axiosReq.get('/moods/');
                setMoods(data);
            } catch (err) {
                //console.log(err);
            }
        };
        fetchMoods();
    },[])
    
    return (
        <div>
            {moods.map((mood, i) => (
                <p key={i} >{mood.name}</p>
            ))}
        </div>

    )
}

export default MoodsPage