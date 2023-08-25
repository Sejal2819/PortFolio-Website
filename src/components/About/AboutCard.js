import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sejal Tyagi </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am a final year student pursuing a bachelors degree 
            in Computer Science Engineering at Ajay Kumar Garg Engineering College.
            <br />
            I am Dedicated and self-motivated engineering student with the ability to multitask, learn fast, and effectively self-manage during independent projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sejal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
