import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Orders.css";
import { useAuth } from "../context/GlobalContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user, basket } = useAuth();
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        <Alert variant={"success"}>
          Thank You ( {user.email} ) for Purchased
        </Alert>
        <Link to="/">
          <Button variant="warning">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
