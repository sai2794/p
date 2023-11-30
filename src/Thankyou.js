import React from "react";
import { Row, Col } from "reactstrap";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <i className="fas fa-pizza-slice thank-you-pizza"></i>
          <p className="thanks-subtext">
            Your reservation is successful.
          </p>
          <Link class="nav-link" to='/delform'>
      <Button class="button" variant="contained" size="small" > 
        Delete Reservation
      </Button> </Link>
        </Col>
      </Row>
    </div>
  );
};