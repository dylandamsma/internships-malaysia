import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Badge from '@kiwicom/orbit-components/lib/Badge';

import Suitcase from "@kiwicom/orbit-components/lib/icons/Suitcase";
import Clock from "@kiwicom/orbit-components/lib/icons/Clock";

import { paramCase } from "param-case";

const Card = styled.div`
    position: relative;
    background: rgba(52, 56, 68, 0.29);
    height: auto;
    width: 330px;
    margin-left: 30px;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.06);
    padding: 20px 30px;
    transition: all 300ms ease;
    border-radius: 3px;
    margin-bottom: 25px;
`;

const CardInfo = styled.div`
    width: 80%;
`

const CompanyLink = styled.a`

`



const JobSidebar = props => {

    return (

                <Card>
                    <Stack
                        flex
                        direction="row"
                        justify="start"
                    >
                        <CardInfo>
                            <Heading element="h2" type="title2" spaceAfter="small" inverted>Sidebar</Heading>
                            <Text type="secondary" spaceAfter="large"> Here's where company information goes</Text>
                        </CardInfo>
                    </Stack>
                </Card>

    )
};

export default JobSidebar;