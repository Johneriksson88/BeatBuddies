import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import Post from "../posts/Post";
import PopularProfiles from "../profiles/PopularProfiles";

function MoodPage() {
  const { id } = useParams();
  const [mood, setMood] = useState({});
  const [posts, setPosts] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
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
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <h2>{mood.name}</h2>
        {hasLoaded ? (
          <Col>
            {posts.map((post) => (
              <Post key={post} {...post} setPosts={setPosts} />
            ))}
          </Col>
        ) : (
          <Asset spinner />
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default MoodPage;
