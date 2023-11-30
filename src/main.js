import React from "react";
import { Row, Col, Button } from "reactstrap";

export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            Find your TABLE!!!
            <i className="fas fa-pizza-slice pizza-slice"></i>
          </p>
          <Button
            // color="brown"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src="https://m.media-amazon.com/images/I/71a0PWlJPUL.jpg" 
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};