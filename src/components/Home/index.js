import React from "react";
import Brain from "../../assets/images/brain-icon.png";
import Gear from "../../assets/images/gear-icon.png";
import Student from "../../assets/images/student-icon.png";
import Team from "../../assets/images/team-icon.png";
import self from "../../assets/images/self-portrait.jpg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {

    return (
        <Container>
                <Row>
                    <h1>Hi, You can call me Alex!</h1>
                    <img src={self} alt="Alexander Lu"></img>
                </Row>

                <Row>
                    <Col>
                        <h2>Problem Solving</h2>
                        <img src={Brain} alt="networking minds"></img>
                    </Col>
                    <Col>
                        <p>With my completion of the Full Stack Coding Bootcamp from the University of Texas, I have been equipped with relevant coding skills and mindset to pursue an unknown ocean of knowledge.</p>
                        <p>That means being ready for failure and learning from mistakes, nothing beats finding an issue and optimizing the solutions.</p>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <h2>Teamwork/Communication</h2>
                        <img src={Team} alt="a team working on a single idea"></img>
                    </Col>
                    <Col>
                        <p>Being a team player means being a good communicator. I’m always dependable and ready to brainstorm ideas with others. Collaboration is the key to success and contributing to something bigger than yourself. </p>
                        <p>Being a good team member means resolving the problem, not the ego.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Creativity/Critical Thinking</h2>
                        <img src={Gear} alt="set of gears working together"></img>
                    </Col>
                    <Col>
                        <p>It's important to apply yourself to the situation, no problem has strictly one answer and there’s always room to improve. Put your own stamp on things, give it a twist, think beyond your walls.</p>
                        <p>As an amateur film maker, I derive my influences from across the globe and am always looking for inspiration from every angle. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Attentive/Aware</h2>
                        <img src={Student} alt="student reading a book"></img>
                    </Col>
                    <Col>
                        <p>Sometimes you’re the nail and sometimes you’re the hammer. Nothing really puts you in your place like being humbled by a mentor.</p>
                        <p>I’m always striving for self improvement, and looking for advice from outside my reach.</p>
                    </Col>
                </Row>
        </Container>
    )
}

export default About