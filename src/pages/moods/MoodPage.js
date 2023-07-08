import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function MoodPage() {
    const { id } = useParams();
    const [mood, setMood] = useState({});
    useEffect(() => {
        const fetchMood = async () => {
            try {
                const response = await axiosReq.get(`/moods/${id}`)

                setMood(response.data);
            } catch (err) {
                //console.log(err);
            }
        };
        
        fetchMood();
        console.log("mood: ", mood)
    }, [id]);

    return (
        <div>
            <h1>{mood.name}</h1>
            {mood.posts?.map((post) => (
                <p key={post.id}>{`${post.artist} - ${post.song}`}</p>
            ))}
        </div>

    )
}

export default MoodPage