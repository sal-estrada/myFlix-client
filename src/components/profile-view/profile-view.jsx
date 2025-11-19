import { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, token, movies, setUser }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday?.slice(0, 10));

  const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.id));

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`https://mymov-e6f0370bab7c.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
    })
      .then(res => res.json())
      .then(updatedUser => {
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile updated!");
      });
  };

  const handleDeregister = () => {
    const confirmDelete = confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    fetch(`https://mymov-e6f0370bab7c.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      localStorage.clear();
      setUser(null);
    });
  };

  return (
    <Col md={8}>
      <h1>{user.Username}'s Profile</h1>

      <Form onSubmit={handleUpdate} className="mb-4">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control value={username} onChange={e => setUsername(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Update Profile</Button>
      </Form>

      <Button variant="danger" onClick={handleDeregister}>Delete Account</Button>

      <h2 className="mt-5">Favorite Movies</h2>
      {favoriteMovies.length === 0 && <div>No favorites yet.</div>}

      {favoriteMovies.map(movie => (
        <Col className="mb-4" key={movie.id} md={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Col>
  );
};
