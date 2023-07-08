import React, { useEffect, useState, } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
    }, [])

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2 d-inline" lg={8}>
                {moods.map((mood) => (
                    <Link to={`/moods/${mood.id}`}><Button size="lg" className="m-2" key={mood.id}>{mood.name}</Button></Link>

                ))}
            </Col>
        </Row>

    )
}

export default MoodsPage