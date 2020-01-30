// import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const Hero = props => {

    return (
    <Wrapper>
        <Container>
            <Row style={{ height: 400 }} justify="center" align="middle">
                <Col justify="center" align="center">
                    <Stack 
                        direction="column"
                        justify="center"
                        align="center"
                        spaceAfter="large"
                    >
                        <HeroText>
                            <Fade cascade duration={2500}>
                            <H4>
                                CURRENTLY IN DEVELOPMENT 👨‍💻
                            </H4>
                            <H1>
                                Find a tech job in Malaysia<br /> that truly excites you
                            </H1>
                            </Fade>
                        </HeroText>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </Wrapper>
    )
};

export default Hero;