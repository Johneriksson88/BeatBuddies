import React, { useEffect, useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";

function ContactForm() {
  // redirect user if logged out
  useRedirect("loggedOut");
  // state for showing/hiding the alert message on successful submit
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});
  // set state for form data
  const [postData, setPostData] = useState({
    title: "",
    email: "",
    message: "",
  });
  // destructure form data into single variables
  const { title, email, message } = postData;
  const history = useHistory();

  // timer function that closes the alert message after 4 secs and redirects the user back after
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        history.goBack();
      }, 4000);
      return () => clearTimeout(timer);
    }
    // this useffect runs when the showAlert state updates
  }, [showAlert, history]);

  // sets the post data state as the user types
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // submit function for the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("email", email);
    formData.append("message", message);
    try {
      await axiosReq.post("/contact/", formData);
      // changes showAlert state to show the sucess message
      setShowAlert(true);
    } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Row>
      {showAlert && (
        <Alert variant="success" className="text-center">
          Thank you for contacting us! Redirecting you back...
        </Alert>
      )}

      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>{`Your email (optional)`}</Form.Label>
              <Form.Control
                placeholder="email@example.com"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.email?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>{`Title (optional)`}</Form.Label>
              <Form.Control
                placeholder="Title"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                placeholder="Your message, bug report, feedback or anything you want!"
                as="textarea"
                rows={5}
                name="message"
                value={message}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.message?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

export default ContactForm;
