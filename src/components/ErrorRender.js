import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

const ErrorRender = () => {
  const { error } = useSelector((state) => state.movie);

  return (
    <div>
      <Alert variant="danger">{error}</Alert>
      
    </div>
  );
};

export default ErrorRender;
