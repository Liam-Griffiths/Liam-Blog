import {Container, Card, Row, Text, Grid, Button, Spacer, Col} from "@nextui-org/react";

export default function Home() {
  return (
              <Container sm>
                  <Row justify="center">
                      <div className="name-text">
                          <Text
                              h1
                              size={20}
                              weight="bold"
                          >
                              Experience
                          </Text>
              </div>
                  </Row>
                  <Spacer y={2} />
                  <Row justify="center">

                      <ul className="timeline">
                          <li>
                              <Text size={20} weight="light" className="experience-text">
                              <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
                              <a href="#" className="float-right">21 March, 2020</a>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
                                  nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
                                  sagittis ligula in sodales vehicula....</p>
                              </Text>
                          </li>
                          <li>
                              <Text size={20} weight="light" className="experience-text">
                              <a href="#">21 000 Job Seekers</a>
                              <a href="#" className="float-right">4 March, 2020</a>
                              <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque
                                  felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                              </Text>
                          </li>
                          <li>
                              <Text size={20} weight="light" className="experience-text">
                              <a href="#">Awesome Employers</a>
                              <a href="#" className="float-right">1 April, 2020</a>
                              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt
                                  vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                              </Text>
                          </li>
                      </ul>
                  </Row>
              </Container>
  )
}
