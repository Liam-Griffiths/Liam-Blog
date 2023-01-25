import {Container, Card, Row, Text, Grid, Button, Spacer, Col} from "@nextui-org/react";
import { useCallback } from "react";
import type { Container as ParticleContainer, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Home() {

    const particlesInit = useCallback(async (engine: Engine) => {
        // custom stuff here.
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: ParticleContainer | undefined) => {
        await console.log(container);
    }, []);

    const options = {
        particles: {
            color: {
                value: "#000"
            },
            links: {
                color: "#000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2
            },
            collisions: {
                enable: true
            },
            move: {
                direction: "bottom",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.6,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: "circle"
            },
            size: {
                random: true,
                value: 5
            }
        }
    }

  return (
              <Container>
                  <Particles
                      id="tsparticles"
                      init={particlesInit}
                      loaded={particlesLoaded}
                      options={options}
                  />
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
              </div>
                  </Row>
                  <Spacer y={2} />
                  <Row justify="center" className="text-center">

                          <Text size={20} weight="light" className="bio-text">
                              Hello! I'm a Senior Software Developer from
                              the UK. Builder of cool serverless apps.
                              Lover of guitar and sci-fi books.
                          </Text>

                  </Row>
              </Container>
  )
}
