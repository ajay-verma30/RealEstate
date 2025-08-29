import React from 'react'
import {Row, Col, Card } from 'react-bootstrap'

function Container2() {
  return (
    <>
        <div className="second-container">
            <div className="header-class">
                <h2>Our Recent Signature Deals</h2>
                <br/>
                </div> 

                 <Row>
                 <Col md={4} sm={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src="house1.jpg" />
            <Card.Body>
              <Card.Title>Property 1</Card.Title>
              <Card.Text>$500,000 · New York</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src="house2.jpg" />
            <Card.Body>
              <Card.Title>Property 2</Card.Title>
              <Card.Text>$600,000 · Los Angeles</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src="house3.jpg" />
            <Card.Body>
              <Card.Title>Property 3</Card.Title>
              <Card.Text>$450,000 · Chicago</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
                </div>
    </>
  )
}

export default Container2