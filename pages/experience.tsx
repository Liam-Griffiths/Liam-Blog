import {Container, Card, Row, Text, Grid, Button, Spacer, Col, Popover} from "@nextui-org/react";

export default function Home() {
  return (
              <Container sm>
                  <Row justify="center">
                      <div className="name-text text-center">
                          <Text
                              h1
                              size={60}
                              css={{
                                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                              }}
                              weight="bold"
                          >
                              Experience
                          </Text>
                          <br/>
                          <Text
                              h1
                              size={20}
                              weight="bold"
                          >
                              Click for more details.
                          </Text>
              </div>
                  </Row>
                  <Spacer y={2} />
                  <Row justify="center">

                      <ul className="timeline">
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>Senior Software Engineer, Mojo Mortgages + RVU</a>
                                          <br/>
                                          <small>Manchester, Remote — Apr 2021 - Dec 2022</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content><p>
                                      <ul>
                                          <li>Joined the small development team as a senior Software Engineer with specific focus on shipping the new client portal.</li>
                                          <li>Shipped multiple key integrations as lead Software Engineer.</li>
                                          <li>Implemented Mojo’s key eligibility and experience system, bucketing all clients that complete a Mojo fact find, based upon a configurable table of criteria.</li>
                                          <li>Performed code reviews of other Team members code. Focused on helping the team move to using Typescript effectively.</li>
                                          <li>Experienced working with AWS (Lambda, API Gateway, DynamoDB, etc).</li>
                                          <li>Experienced working with CI/CD, specifically with Bitbucket Pipelines. Also some exposure to Terraform and its use and maintenance.</li>
                                          <li>Participated in sessions with key stakeholders and partners. Assumed the “lead” Software Engineer role when required.</li>
                                      </ul></p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>Software Engineer, Mission Labs</a>
                                          <br/>
                                          <small>Rossendale, Remote — Dec 2019 - Apr 2021</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content>
                                      <p>
                                          <ul>
                                              <li>Joined the close knit CircleLoop product team as a server Software Engineer, handling maintenance of an existing express application and the addition of new components in a serverless fashion using AWS, Node.js.</li>
                                              <li>Created Integrations between CircleLoop and other third party APIs and platforms.</li>
                                              <li>Experience using AWS web technologies including Lambdas, API Gateway, DynamoDB, and Cognito. Experienced using GitFlow version
                                                  control in a large team and managing a team JIRA board during sprints.</li>
                                          </ul>
                                      </p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>Software Engineer, Apadmi</a>
                                          <br/>
                                          <small>Manchester — July - Nov 2019</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content>
                                      <p>
                                          <ul>
                                              <li>Joined one of a number of brand new key product scrum teams as a server Software Engineer. Working in scrum fashion to develop the underlying API architecture on AWS for a number of upcoming iOS and Android applications.</li>
                                              <li>Experience using the latest AWS web technologies including Lambdas, API Gateway, DynamoDB, and Cognito. Experienced using GitFlow version control in a large team and managing a team JIRA board during sprints.</li>
                                              <li>Performed reviews of other Software Engineers code during pull requests and supporting the testing team.</li>
                                              <li>Completed PSM Level 1 Scrum Master Certification.</li>
                                          </ul>
                                      </p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>Software Engineer, GutterPro (On Behalf of RuntimeUK)</a>
                                          <br/>
                                          <small>Wellington, Shropshire— Sep 2017 - Jul 2019</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content>
                                      <p>
                                          <ul>
                                              <li>Working closely with a large client base, communicating directly, setting meetings, developing projects to help clients achieve their goals.</li>
                                              <li>Developing multiple products including:
                                                  ● Creation of a Franchise area Mapping tool. (Angular)
                                                  ● Creation of a Franchise Management Suite, showing current and
                                                  past performance data among other tools. (PHP, Node.js)
                                                  ● Implementation and Automation of the Reviews.io system into
                                                  GutterPro.
                                                  ● Development of a (FDM) Leaflet tracking app for iOS.</li>
                                          </ul>
                                      </p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>Software Engineer, RuntimeUK</a>
                                          <br/>
                                          <small>Wellington, Shropshire— Sep 2017 - Jul 2019</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content>
                                      <p>
                                          <ul>
                                              <li>Working closely with a large client base, communicating directly, setting meetings, developing projects to help clients achieve their goals.</li>
                                              <li>Design and Implementation of web apps for clients, to fulfill specific business needs. PHP + SQL, Angular, Node.js, Typescript.</li>
                                          </ul>
                                      </p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>Intern Engineer, Sodalite Creative</a>
                                          <br/>
                                          <small>Luton, Bedfordshire— Aug 2015 - Mar 2016</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content>
                                      <p>
                                          <ul>
                                              <li>Delivered an overhaul of their corporate website.</li>
                                              <li>I contributed to the prototype implementation of a content delivery system, utilizing the Microsoft suite of products, including Azure cloud computing, Microsoft SQL databases and ASP.NET MVC/WebAPI.</li>
                                          </ul>
                                      </p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                          <li>
                              <Popover isBordered disableShadow>
                                  <Popover.Trigger>
                                      <Text size={20} weight="light" className="experience-text">
                                          <a>University Of Bedfordshire</a>
                                          <br/>
                                          <small>Bsc (Hons) Computer Games Development — 2012 - 2016</small>
                                      </Text>
                                  </Popover.Trigger>
                                  <Popover.Content>
                                      <p>
                                          <ul>
                                              <li>I achieved a 2:1 in Computer Games Development from The University of Bedfordshire, this was a software development course heavily focused towards the creation of 3D applications ready for use in the video game industry.</li>
                                          </ul>
                                      </p>
                                  </Popover.Content>
                              </Popover>
                          </li>
                      </ul>
                  </Row>
              </Container>
  )
}
