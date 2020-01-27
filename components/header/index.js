import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Button from "@kiwicom/orbit-components/lib/Button";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
import Heading from "@kiwicom/orbit-components/lib/Heading";

import Stack from '@kiwicom/orbit-components/lib/Stack';

const Wrapper = styled.div`
    display: flex;
    height: 64px;
    margin-bottom: 50px;
    // background-color: rgba(22, 22, 26, 0.7);
    // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    align-items: center;
`;

const Logo = styled.div`
`

const Menu = styled.div`

`

const Header = props => {
    return (
    <Wrapper>
        {/* <NavigationBar style={`backgroundColor: #020A1C`}> */}
            <Container>
                <Row justify="space-between">
                    <Stack
                        flex
                        direction="row"
                        justify="between"
                        align="center"
                    >
                            <Logo>
                                <Link href="/">
                                    <a>
                                        <Heading element="div" type="title2" inverted>TechJobsMY</Heading>
                                    </a>
                                </Link>
                            </Logo>
                            <Menu>
                                    <Stack
                                        flex
                                        direction="row"
                                        justify="between"
                                        align="center"
                                    >
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
                                    </Stack>
                            </Menu>
                    </Stack>
                </Row>
            </Container>
        {/* </NavigationBar> */}
    </Wrapper>
    )
};

export default Header;