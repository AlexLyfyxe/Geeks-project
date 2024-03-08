import { useEffect, useState } from "react";
import React from "react";
import { Col, Container } from "react-bootstrap";
import arrowImage from "./images/arrow.svg";
import users from "./AllUsers.json"
import "./AllUsers.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TitleCours/fonts/style.css';
import "./fonts/style.css"
import { motion } from "framer-motion";

function AllUsersBlock() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(users);
    }, []);


    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0, x: 0,
            opacity: 1,
            transition: { delay: custom * 0.4 }
        })
    }

    return (
        <Container className='conteiner' fluid>
            <motion.Row className="allUser" initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                <Col className="groupUsersBlock">
                    {courses && courses.map((course, index) => (
                        <motion.Col custom={index + 1} variants={textAnimation} xs={4} key={index} className="userBlock">

                            <div className="userBlockImage">
                                <img src={course.img_grey} alt="cours" className="gray" />
                                <img src={course.img_color} alt="cours" className="color" />
                            </div>
                            <div className="userBlockData">{course.start_date}</div>
                            <h2 className="userBlockTitle mb-3">{course.title}</h2>
                            <p className="userBlockInfo">{course.description}</p>
                            <p className="userBlockDuration">{course.duration}</p>
                            <div className="userBlockBottom">
                                <p className="userBlockText">{course.buttom} </p>
                                <img className="userBlockArrow" src={arrowImage} alt="arrow" />
                            </div>

                        </motion.Col>
                    ))}
                </Col>
            </motion.Row>
        </Container >
    );
}

export default AllUsersBlock