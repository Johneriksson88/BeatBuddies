import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Asset from "../../components/Asset";
import styles from "../../styles/MoodsPage.module.css";
import appStyles from "../../App.module.css";

function MoodsPage() {
  const [moods, setMoods] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const { data } = await axiosReq.get("/moods/");
        setMoods(data);

        setHasLoaded(true);
      } catch (err) {
        //console.log(err);
      }
    };
    fetchMoods();
  }, []);

  return (
    <Row className="h-100">
      <Row className="d-lg-none text-center mb-3 mt-5">
        <Button variant="warning">
          <i className={`far fa-plus-square ${styles.plus}`}></i>New mood
        </Button>
      </Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          <Col className="py-2 p-0 p-lg-2 d-inline" lg={8}>
            {hasLoaded ? (
              <>
                {moods.map((mood) => (
                  <Link to={`/moods/${mood.id}`}>
                    <Button size="lg" className="m-2" key={mood.id}>
                      {mood.name}
                    </Button>
                  </Link>
                ))}
              </>
            ) : (
              <Asset spinner />
            )}
          </Col>
        </Container>
      </Col>

      <Col
        lg={4}
        className="d-none d-lg-block p-0 p-lg-2 text-center"
      >
        <Link to={"/createmood"}>
          <Button variant="warning">
            <i className={`far fa-plus-square ${styles.plus}`}></i>New mood
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

export default MoodsPage;
