import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import Select from "react-select";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [moodOptions, setMoodOptions] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const { data } = await axiosReq.get("/moods/");
        console.log("data: ", data);
        const moodNames = data.map((mood) => ({
          label: mood.name,
          value: mood.id,
        }));
        setMoodOptions(moodNames);
        console.log("mood options: ", moodOptions);
      } catch (err) {
        //console.log(err);
      }
    };
    fetchMoods();
  }, []);

  const handleSelectedMoods = (event) => {
    // console.log("handle selected moods:", event);
    const chosenMoods = event?.map((mood) => mood.value);
    setPostData({
      ...postData,
      moods: chosenMoods,
    });
    console.log("chosen moods:", chosenMoods);
    console.log("post data: ", postData);
  };
  const [postData, setPostData] = useState({
    title: "",
    artist: "",
    song: "",
    link: "",
    moods: [],
    content: "",
    image: "",
  });
  const { title, artist, song, link, moods, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  /* const handleSelectMoods = (event) => {
    setPostData({
      ...postData,

    })
  }; */

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("song", song);
    formData.append("link", link);
    moods.forEach((mood) => formData.append("moods", mood));
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Artist</Form.Label>
        <Form.Control
          type="text"
          name="artist"
          value={artist}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.artist?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Song</Form.Label>
        <Form.Control
          type="text"
          name="song"
          value={song}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.song?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Moods</Form.Label>
        {postData && <p>{postData.moods}</p>}
        <Select
          isMulti
          options={moodOptions}
          placeholder="Select one or more moods"
          onChange={handleSelectedMoods}
        />
      </Form.Group>
      {errors?.moods?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          name="link"
          value={link}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.link?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
