import React from "react";
import { Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Row className="justify-content-md-center mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1702972849~exp=1702973449~hmac=e8bd70b9f071c514324e9f43b768be81268e30533650358c5cf1aee37fd5552a" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default HomePage;
