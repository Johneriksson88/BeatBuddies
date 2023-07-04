import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/MoodsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function MoodsPage({ message, filter = "" }) {
    const [moods, setMoods] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const { data } = await axiosReq.get(`/moods/?${filter}search=${query}`);
                setMoods(data);
                setHasLoaded(true);
            } catch (err) {
                //console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchMoods();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);

    return (
        <Row className="h-100">
            <h1>Moods</h1>
        </Row>

    );
}

export default MoodsPage;