import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FoodFiesta from "../../Assets/Projects/Foodfiesta.png";
import SocioHub from "../../Assets/Projects/SocioHub.png";

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
              imgPath={FoodFiesta}
              isBlog={false}
              title="FoodFiesta"
              description="Created a ReactJS website with an API for browsing and viewing authentic recipes, featuring user registration, social sharing, personalized recommendations, filters, meal planning, nutritional information, and reviews"
              ghLink="https://github.com/Sejal2819/FoodFiesta"
              demoLink="https://food-fiesta-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocioHub}
              isBlog={false}
              title="SocioHub (In Process)"
              description="Developing a dynamic fullstack MERN application featuring responsive design, comprehensive authentication, user engagement through likes, and an intuitive dark mode, showcasing my proficiency in React, MongoDB, and MUI."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
