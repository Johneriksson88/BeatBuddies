import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import MoodsPage from './MoodsPage';
import { Card } from 'react-bootstrap';

function MoodPage() {
    const { id } = useParams();

    const [mood, setMood] = useState([]);

    useEffect(() => {
        const fetchMood = async () => {
            try {
                const { data } = await axiosReq.get(`/moods/${id}`);
                setMood(data);
            } catch (err) {
                //console.log(err);
            }
        };
        fetchMood();
        /* const posts = mood.posts;
        console.log("posts: ", {posts}) */
    }, [id, mood, setMood])
    return (
        <div>
            <Card>
                <Card.Title>{mood.name}</Card.Title>
                {/* {mood.posts.map((post, i) => (
                    <Card.Text key={i}>{post.title}</Card.Text>
                ))} */}
                
            </Card>
        </div>

    )
}

export default MoodPage