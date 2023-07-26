import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import Post from "../posts/Post";
import PopularProfiles from "../profiles/PopularProfiles";
import appStyles from "../../App.module.css";

function MoodPage() {
  // get the id from the url to show the correct mood
  const { id } = useParams();
  const [mood, setMood] = useState({});
  // posts state to allow the posts related to the mood to appear on the mood page
  const [posts, setPosts] = useState([]);

  // hasLoaded state to show/hide the loading spinner
  const [hasLoaded, setHasLoaded] = useState(false);

  // fetch the mood of the id in the useParams hook
  useEffect(() => {
    const fetchMood = async () => {
      try {
        const response = await axiosReq.get(`/moods/${id}`);
        setPosts(response.data.posts);
        setMood(response.data);
        setHasLoaded(true);
      } catch (err) {
        //console.log(err);
      }
    };

    fetchMood();
  }, [id]);
  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          <Row noGutters className="px-3 d-flex justify-content-center">
            <Col lg={6} className="text-center">
              <h3 className="m-2">{mood.name}</h3>
              <hr></hr>
              <Row className="justify-content-center no-gutters">
                <Col xs={3} className="my-2">
                  <div>{posts.length}</div>
                  <div>posts</div>
                </Col>
              </Row>
            </Col>

            <hr></hr>
          </Row>
          {hasLoaded ? (
            <Col>
              {posts.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))}
            </Col>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default MoodPage;
