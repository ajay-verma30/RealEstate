import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'

function Review() {
  return (
    <>
    <div className="second-container">
            <div className="header-class">
                <h2>What Does our client's say</h2>
                <br/>
              <Row>
        <Col md={4} sm={12} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Text>
                "BN Real Estate made buying our first home stress-free and enjoyable. 
                The team was always available to answer our questions and guided us 
                through every step of the process. Truly professional and caring!"
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">— Sophia Mitchell</small>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4} sm={12} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Text>
                "I was looking for a property to invest in, and BN Real Estate found 
                the perfect match within my budget. Their market knowledge and attention 
                to detail gave me complete confidence in my decision."
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">— James Carter</small>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4} sm={12} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Text>
                "From the very first meeting, I felt supported and understood. The 
                team went above and beyond to show me options that fit my lifestyle, 
                and I couldn’t be happier with my new home."
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">— Ava Thompson</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
    </>
  )
}

export default Review