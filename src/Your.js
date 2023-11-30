import React, { useState } from "react";
import { Button, Col, Row, Input } from "reactstrap";
import deleteReservation from "./DelReserv"; // Import the function from the separate file

const YourComponent = (props) => {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: ""
  });

  // Function to handle reservation deletion
  const handleDeleteReservation = async () => {
    // const datetime = getDate(); // You can include the getDate function or adjust accordingly

    await deleteReservation(booking.email, booking.phone);
    // You might want to perform further actions after deletion if needed
  };

  // ... rest of your component code ...

  return (
    // ... existing JSX code ...

    <Row noGutters className="text-center">
      <Col>
        <Button
          color="danger"
          className="delete-reservation-btn"
          onClick={handleDeleteReservation}
        >
          Delete Reservation
        </Button>
      </Col>
    </Row>
  );
};

export default YourComponent;
