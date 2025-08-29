import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Home.css'
import Container1 from '../../component/Containers/Container1'
import About from '../../component/About/About'
import Review from '../../component/Review/Review'
import Container2 from '../../component/Container2/Container2'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom'
import Navigation from '../../component/Navigation'
import Footer from '../../component/Footer/Footer'

function Home() {
  const navigate = useNavigate();
  const handleContact =(e)=>{
    e.preventDefault();
    navigate('/contact')
  }
  return (
    <>
    <Navigation/>
            <div className="top-container">
                                      <div className="top-container-content">
                    <Row>
                      <Col xs={12} md={6}>

                    <h4>
                        Find a place <br/>you will call home
                    </h4>
                    <button className='btn-success call_btn' onClick={handleContact}>Book a Call</button>
                    <div className="social-buttons">
                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                         </a>
                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 social-icons">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                         </a>
                    </div>
                      </Col>
                      <Col xs={12} md={6} className='sub-text'>
                        <p>With wide variety of Properties you will not just find accomodation,<br/> but a place where your new life begins full<br/> of cosiness and possibilities</p>
                      </Col>
                    </Row>
                    </div>
            </div>
            <Container1/>
            <hr className="custom-hr" />
            <About/>
            <hr className="custom-hr" />  
            <Review/>
            <hr className="custom-hr" />
            <Container2/>
            <Footer/>
    </>
  )
}

export default Home