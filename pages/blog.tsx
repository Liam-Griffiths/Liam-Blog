import {Container, Card, Row, Text, Grid, Button, Spacer, Col} from "@nextui-org/react";

export default function Home() {
  return (
              <Container>
                  <Row justify="center">
                      <div className="name-text">
                          <Text
                              h1
                              size={60}
                              css={{
                                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                              }}
                              weight="bold"
                          >
                              Blog
                          </Text>
              </div>
                  </Row>
                  <Spacer y={2} />
                  <Row justify="center" className="text-center">

                          <Text size={20} weight="light" className="bio-text">
                              Hello! I'm a Senior Software Developer from
                              the UK. Builder of interesting serverless
                              applications. Lover of guitar and sci-fi.
                          </Text>

                  </Row>
                  <Spacer y={2} />
                  <Row justify="center" className="text-center">

                      <Text size={20} weight="light" className="bio-text">
                          Hello! I'm a Senior Software Developer from
                          the UK. Builder of interesting serverless
                          applications. Lover of guitar and sci-fi.
                      </Text>

                  </Row>
                  <Spacer y={2} />
                  <Row justify="center" className="text-center">

                      <Text size={20} weight="light" className="bio-text">
                          Hello! I'm a Senior Software Developer from
                          the UK. Builder of interesting serverless
                          applications. Lover of guitar and sci-fi.
                      </Text>

                  </Row>
                  <Spacer y={2} />
                  <Row justify="center" className="text-center">

                      <Text size={20} weight="light" className="bio-text">
                          Hello! I'm a Senior Software Developer from
                          the UK. Builder of interesting serverless
                          applications. Lover of guitar and sci-fi.
                      </Text>

                  </Row>
                  <Spacer y={2} />
                  <Row justify="center" className="text-center">

                      <Text size={20} weight="light" className="bio-text">
                          Hello! I'm a Senior Software Developer from
                          the UK. Builder of interesting serverless
                          applications. Lover of guitar and sci-fi.
                      </Text>

                  </Row>
              </Container>
  )
}
