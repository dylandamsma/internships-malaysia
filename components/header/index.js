import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Button from "@kiwicom/orbit-components/lib/Button";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import Heading from "@kiwicom/orbit-components/lib/Heading";

const Wrapper = styled.div`
    height: 64px;
`;

const Header = props => {
    return (
    <Wrapper>
        <NavigationBar>
            <Container>
                <Row justify="space-between">
                    <Col justify="middle" align="center">
                        <Heading element="div" type="title2">InternsWin</Heading>
                    </Col>
                    <Col justify="flex-end" align="center">
                            <Link href="#">
                                <ButtonLink type="secondary" transparent>For Students</ButtonLink>
                            </Link>
                            <Link href="#">
                                <ButtonLink type="secondary" transparent>For Employers</ButtonLink>
                            </Link>
                            <Link href="#">
                                <ButtonLink type="secondary" transparent>Resources</ButtonLink>
                            </Link>
                            <Link href="#">
                                <Button>Post a job</Button>
                            </Link>
                    </Col>
                </Row>
            </Container>
        </NavigationBar>
    </Wrapper>
    )
};

export default Header;