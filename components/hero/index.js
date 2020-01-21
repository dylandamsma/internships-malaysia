// import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Stack from '@kiwicom/orbit-components/lib/Stack';
import Heading from '@kiwicom/orbit-components/lib/Heading';

const Wrapper = styled.div`
    padding: 25px 0;
    // height: 40vh;
    margin-bottom: 25px;
`;

const Hero = props => {
    return (
    <Wrapper>
        <Container>
            <Row style={{ height: 200 }} justify="center" align="middle">
                <Col justify="center" align="center">
                    <Stack 
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <Heading element="h1" type="display">
                            Find the perfect internship for you
                        </Heading>
                        <Heading element="h2" type="displaySubtitle">
                            Because being an intern can be awesome.
                        </Heading>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </Wrapper>
    )
};

export default Hero;