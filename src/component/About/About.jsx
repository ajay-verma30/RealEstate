import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <>
        <div className="second-container">
            <div className="header-class">
                <h2>About Us</h2>
            </div>
            <Row className='detail-section'>
                
                    <Col xs={12} md={8}>
                    <p className='about-text'>
                        At <span className='highlight'>Horizon Homes</span> Real Estate, we are passionate about helping people find more than just a house—we help them find a home.
                                                                            Our mission is to guide you through every step of your property journey with trust and transparency.
                                                                            With years of industry expertise, we connect clients to the best residential and investment opportunities.
                                                                            We take pride in offering personalized solutions tailored to your lifestyle, needs, and budget.
                                                                            From luxury estates to modern apartments, our listings cover a wide range of choices.
                                                                            Our dedicated team ensures a seamless experience, from property tours to closing deals.
                                                                            We believe in building long-term relationships, not just completing transactions.
                                                                            With <span className='highlight'>Horizon Homes</span> Real Estate by your side, your dream home is never out of reach
                    </p>
                    <button className='about-button'>Learn About our Journey</button>
                    <br/>
                </Col>
                <Col xs={12} md={4}>
                      <Card>
                          <Card.Body>
                            <Card.Title>300+ <br/></Card.Title>
                            <p>Happy Families moved into their Dream Home</p>
                                <FontAwesomeIcon icon={faHandshake} className='font-icons' />
                          </Card.Body>
                      </Card>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default About