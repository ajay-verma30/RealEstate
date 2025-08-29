import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import './Contact.css'
import Navigation from '../../component/Navigation'
import Footer from '../../component/Footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
    <Navigation/>
    <div className="main-frame-contact">
        <div className="contact-page">
            <h1 className='title text-center'>Planning to buy something, confused with options. <br/><span className='highlight'>Need Suggestions!</span></h1>
            <Container className='custom-contact-container'>
            <Row>
                <Col xs={12} md={6}>
                <h2>LET'S TALK</h2>
                <h5>We are always there to help.</h5>
                <br/>
                <h5>Ask us Anything. Or Just say HI!!!</h5>
                
                <div className="social-buttons">
                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='social-icons' style={{color:"white"}}>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                         </a>
                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 social-icons" style={{color:"white"}}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                         </a>
                    </div>
                    <hr className="custom-hr" />
                </Col>

                <Col xs={12} md={6}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Name'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Email'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type='number' placeholder='phone'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4}  placeholder='Message'></Form.Control>
                        </Form.Group>
                        <br/>
                        <Button className="btn btn-success">Send Message</Button>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact