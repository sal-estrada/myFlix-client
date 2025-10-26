import { useState } from "react";
import { Button } from "react-bootstrap/Button";
import { Form } from "react-bootstrap/Form";

export const LoginView = () => {
  // Might need to add onLoggedIn inside parantheses
  const [username, setUsername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      access: username,
      secret: password,
    };

    fetch("https://mymov-e6f0370bab7c.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user.");
        }
      })
      .catch((e) => {
        alert("Something went wrong.");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => password(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
