// import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Stack from '@kiwicom/orbit-components/lib/Stack';
import SubscribeForm from '../lib/subscribeForm';

import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    padding: 0 0;
    // height: 40vh;
    // margin-bottom: 25px;
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 50px;
`

const H1 = styled.h1`
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    color: white;
    font-size: 4rem;
    margin-top: 20px;
`

const H4 = styled.h4`
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    color: rgb(94, 106, 210);
    font-size: 0.8rem;
    margin: 0;
    font-weight: 300;
    letter-spacing: 3px;
`

const Hero = props => {

    return (
    <Wrapper>
        <Container>
            <Row style={{ height: 450 }} justify="center" align="middle">
                <Col justify="center" align="center">
                    <Stack 
                        direction="column"
                        justify="center"
                        align="center"
                        spaceAfter="large"
                    >
                        <HeroText>
                            <Fade duration={2500}>
                                <H4>
                                    CURRENTLY IN DEVELOPMENT 👨‍💻
                                </H4>
                                <H1>
                                    Find a tech job in Malaysia<br /> that truly excites you
                                </H1>
                                <SubscribeForm />
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