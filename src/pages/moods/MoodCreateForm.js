import React, { useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";

import styles from "../../styles/MoodCreateForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MoodCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    name: "",
  });
  const { name } = postData;
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    try {
      await axiosReq.post("/moods/", formData);
      history.push("/feed/");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log("errors:", errors);
      }
    }
  };

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(postData);
  };

  return (
    <Container className={appStyles.Content}>
      <Form onSubmit={handleSubmit}>
        <Row className="h-100">
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Form.Group>
              <Form.Label>Mood name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className={styles.textBox}
              />
              {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <FormGroup>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Warning}`}
                type="submit"
              >
                Create
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default MoodCreateForm;
