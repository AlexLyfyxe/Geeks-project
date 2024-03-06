import { useEffect, useState } from "react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import users from "./AllUsers.json"
import "./AllUsers.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TitleCours/fonts/style.css';
import "./fonts/style.css"

function AllUsersBlock() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(users);
    }, []);

    return (
        <Container className='conteiner' fluid>
            <Row className="allUser">
                <Col className="groupUsersBlock">
                    {courses.map((course, index) => (
                        <Col xs={4} key={index} className="userBlock">

                            <div className="userBlockImage">
                                <img src={course.img_grey} alt="cours" className="gray" />
                                <img src={course.img_color} alt="cours" className="color" />
                            </div>
                            <div className="userBlockData">{course.start_date}</div>
                            <h2 className="userBlockTitle mb-3">{course.title}</h2>
                            <p className="userBlockInfo">{course.description}</p>
                            <p className="userBlockDuration">{course.duration}</p>
                        </Col>
                    ))}
                </Col>
            </Row>
        </Container >
    );
}

export default AllUsersBlock