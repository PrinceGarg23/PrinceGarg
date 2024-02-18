import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NEXUS",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Magic Notes",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Bookmarks",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Mewok",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Court Counter",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const projects3 = [
    {
      title: "OMEGA",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "NEXUS BlockChain Based Platform",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Supply Chain Management",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> I present a range of web and mobile development initiatives that demonstrate my proficiency and creativity. Each project showcases my ability to conceptualize, design, and implement solutions that meet client requirements effectively. Through these endeavors, I aim to continuously refine my skills and deliver impactful results in the digital realm.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Android</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Blockchain</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
