import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TitleCourse.css';
import '../TitleCours/fonts/style.css';

function TitleCours() {
    return (
        <Container className='conteiner' fluid>
            <Row>
                <Col className='titleBlockCol'>
                    <hr />
                    <h1 className='titleCours'>САМЫЕ ВОСТРЕБОВАННЫЕ IT- КУРСЫ <span className='titleCoursIn'> В КЫРГЫЗСТАНЕ</span></h1>
                    <p className='postTitleCours'>Мы постоянно исследуем рынок труда в поиске самых популярных и перспективных IT-направлений</p>
                </Col>
            </Row>
            <Row className='showContent'>
                <Col xs={12} className='showBlock'>
                    {[...Array(15)].map((index) => (
                        <p key={index} className="showTextCours">IT КУРСЫ</p>
                    ))}
                </Col>

                {/* </Row>
            <Row className='showContentBottom'> */}
                <Col xs={12} md={8} className='showBlock'>
                    {[...Array(15)].map((index) => (
                        <p key={index} className="showTextCoursBottom">IT КУРСЫ</p>
                    ))}
                </Col>

            </Row>
        </Container>
    );
}

export default TitleCours;