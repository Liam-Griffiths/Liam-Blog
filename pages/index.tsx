import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container, Card, Row, Text, Grid, Button} from "@nextui-org/react";

export default function Home() {
  return (
      <div className="container">
          <Head>
              <title>Next.js Starter!</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
              <Container>
                  <Row>
                      <Container className="name-text">
                          <Text
                              h1
                              size={60}
                              css={{
                                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                              }}
                              weight="bold"
                          >
                              Liam
                          </Text>
                          <Text
                              h1
                              size={60}
                              css={{
                                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                              }}
                              weight="bold"
                          >
                              Griffiths
                          </Text>
                          <Text
                              h1
                              size={60}
                              css={{
                                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                              }}
                              weight="bold"
                          >
                              Developer
                          </Text>
              </Container>
                  </Row>
                  <Row>
                      <Grid.Container gap={2}>
                          <Grid sm={12} md={5}>
                              <Card css={{ mw: "330px" }}>
                                  <Card.Header>
                                      <Text b>Card Title</Text>
                                  </Card.Header>
                                  <Card.Divider />
                                  <Card.Body css={{ py: "$10" }}>
                                      <Text>
                                          Some quick example text to build on the card title and make up the
                                          bulk of the card's content.
                                      </Text>
                                  </Card.Body>
                                  <Card.Divider />
                                  <Card.Footer>
                                      <Row justify="flex-end">
                                          <Button size="sm" light>
                                              Cancel
                                          </Button>
                                          <Button size="sm">Agree</Button>
                                      </Row>
                                  </Card.Footer>
                              </Card>
                          </Grid>
                          <Grid sm={12} md={5}>
                              <Card css={{ mw: "330px" }}>
                                  <Card.Header>
                                      <Text b>Card Title</Text>
                                  </Card.Header>
                                  <Card.Divider />
                                  <Card.Body css={{ py: "$10" }}>
                                      <Text>
                                          Some quick example text to build on the card title and make up the
                                          bulk of the card's content.
                                      </Text>
                                  </Card.Body>
                                  <Card.Divider />
                                  <Card.Footer>
                                      <Row justify="flex-end">
                                          <Button size="sm" light>
                                              Share
                                          </Button>
                                          <Button size="sm" color="secondary">
                                              Learn more
                                          </Button>
                                      </Row>
                                  </Card.Footer>
                              </Card>
                          </Grid>
                      </Grid.Container>
                  </Row>
              </Container>
          </main>

          <Footer />
      </div>
  )
}
