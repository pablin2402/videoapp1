import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";

export default function VideoDetails({ data }) {
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className="text-secondary">{data.lastName}</Card.Text>
        <Button className="mt-auto font-weigth-bold" variant="success">
          Play Trailer 🎬
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}
