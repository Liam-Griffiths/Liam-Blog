import styles from './Footer.module.css'
import {Card, Col, Container, Row, Spacer, Text} from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          <Container>
              <Row justify="center">
                  <Spacer x={8} />
                  <Col>
                      <Text h6 size={15}>
                          <a href="mailto:liam@liam-griffiths.co.uk">Email</a>
                      </Text>
                  </Col>
                  <Spacer x={1} />
                  <Col>
                      <Text h6 size={15}>
                          <a href="https://github.com/liam-griffiths">Github</a>
                      </Text>
                  </Col>
                  <Spacer x={1} />
                  <Col>
                      <Text h6 size={15}>
                          <a href="https://www.linkedin.com/in/liam-g-829103100">LinkedIn</a>
                      </Text>
                  </Col>
                  <Spacer x={8} />
              </Row>
          </Container>
      </footer>
    </>
  )
}
