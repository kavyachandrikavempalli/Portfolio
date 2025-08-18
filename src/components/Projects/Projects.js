import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import face_recognition from "../../Assets/Projects/face_recognition.png";
import guardian_angel from "../../Assets/Projects/guardian_angel.png";
import traffic_hotspot from "../../Assets/Projects/traffic_hotspot.png";
import sample_images from "../../Assets/Projects/sample_images.png";
import westside from "../../Assets/Projects/westside.png";
import sentiment_analysis from "../../Assets/Projects/sentiment_analysis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample_images}
              isBlog={false}
              title="Agriculture Pest Classification using Convolutional Neural Networks"
              description="ML-based agriculture pest classification tool that helps farmers and researchers identify pests with 95% accuracy, improving crop monitoring and protection."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment_analysis}
              isBlog={false}
              title="Advanced Sentiment Analysis and Review Summarization for Movies"
              description="AI-driven sentiment analysis and summarization tool that interprets movie reviews with 96% accuracy and generates concise, human-like summaries."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic_hotspot}
              isBlog={false}
              title="Fast Traffic Accident Hotspot Prediction using Federated Learning on Graph Neural Networks"
              description="AI-powered system for predicting traffic accident hotspots across major U.S. cities, ensuring data privacy through federated learning and delivering highly accurate results."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face_recognition}
              isBlog={false}
              title="Face Recognition using AWS"
              description="Face recognition system built on AWS that delivers highly accurate image detection and scalable video processing workflows."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={westside}
              isBlog={false}
              title="Westside Website Revamp"
              description="Revamped a website through HCI evaluations and design improvements, leading to faster task times and improved usability for users."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guardian_angel}
              isBlog={false}
              title="Guardian Angel"
              description="Mobile safety app that analyzes health and driving data in real time, providing timely alerts for safer travel."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
