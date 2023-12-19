import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/usersApiSlice.js";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswrod, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [registerUser, { isLoading, error }] = useRegisterMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPasswrod) {
      toast.error("Confirm password does not match");
      return;
    } else {
      try {
        const result = await registerUser({ name, email, password }).unwrap();
        dispatch(setUser({...result}));
        navigate("/");
      } catch (error) {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPasswrod}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already Registered? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
