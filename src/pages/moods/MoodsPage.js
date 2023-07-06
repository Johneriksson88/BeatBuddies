import React, { useEffect, useState, } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap';
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
            <Card style={{ width: '18rem' }}>

                {moods.map((mood, i) => (
                    <h1>
                        <Badge key={i} bg="primary">{mood.name}</Badge>
                    </h1>

                ))}
            </Card>

        </Row>

    )
}

export default MoodsPage