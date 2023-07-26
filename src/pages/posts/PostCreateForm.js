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
  // redirects user if logged out
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  // state for storing the options loaded in the select box
  const [moodOptions, setMoodOptions] = useState([]);
  // state for showing/hiding the loading spinner
  const [hasLoaded, setHasLoaded] = useState(false);

  // fetch the moods to be able to display the mood options
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const { data } = await axiosReq.get("/moods/");
        // set the mood name and id as key value pair, the react-select component expects the options in this format
        const moodNames = data.map((mood) => ({
          label: mood.name,
          value: mood.id,
        }));
        setMoodOptions(moodNames);
        setHasLoaded(true);
      } catch (err) {
        //console.log(err);
      }
    };
    fetchMoods();
  }, []);

  // update the moods state when user selects mood in select box
  const handleSelectedMoods = (event) => {
    const chosenMoods = event?.map((mood) => mood.value);
    setPostData({
      ...postData,
      moods: chosenMoods,
    });
  };
  // set form data in state
  const [postData, setPostData] = useState({
    title: "",
    artist: "",
    song: "",
    link: "",
    moods: [],
    content: "",
    image: "",
  });
  // destructure post data into single variables
  const { title, artist, song, link, moods, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  // update form data state as the user types
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // creates URL for uploaded image and sets image state
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // submit the form to API
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Custom validation of moods - cannot be empty
    if (moods.length === 0) {
      setErrors({ moods: "Pick one or more moods." });
      return;
    }
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
        <Form.Label className={styles.label}>Title</Form.Label>
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
        <Form.Label className={styles.label}>Artist</Form.Label>
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
        <Form.Label className={styles.label}>Song</Form.Label>
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
        <Form.Label className={styles.label}>Moods</Form.Label>
        {hasLoaded ? (
          <>
            <Select
              isMulti
              options={moodOptions}
              placeholder="Select one or more moods"
              onChange={handleSelectedMoods}
            />
          </>
        ) : (
          <Asset spinner />
        )}
      </Form.Group>
      {errors.moods ? <Alert variant="warning">{errors.moods}</Alert> : <></>}

      <Form.Group>
        <Form.Label className={styles.label}>Link</Form.Label>
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
        <Form.Label className={styles.label}>Content</Form.Label>
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
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
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
