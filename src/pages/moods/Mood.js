import React from 'react'
import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

const Mood = (props) => {
    const {
        id,
        owner,
        name,
        posts
    } = props;

    return (
        <div>
            <Container>
                <Badge bg="secondary">Mood</Badge>
            </Container>
        </div>
    )
}

export default Mood