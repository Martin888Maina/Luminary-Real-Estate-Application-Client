import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404</h1>
        <h3 className="not-found-message">Oops! The page you're looking for doesn't exist.</h3>
        <p className="not-found-submessage">It seems you've wandered off the path. Let's get you back home!</p>
        <Link to="/">
          <Button className="not-found-button">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;