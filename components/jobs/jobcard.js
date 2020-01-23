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


const Card = styled.div`
    position: relative;
    background: white;
    height: auto;
    width: 100%;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.06);
    padding: 20px 30px;
    transition: all 300ms ease;
    border-radius: 3px;
    margin-bottom: 25px;
    top: 0;

    & :hover {
        box-shadow: 0 3px 10px 0 rgba(0,0,0,0.12);
        top: -3px;
    }
`;

const CardInfo = styled.div`
    width: 80%;
`

const CompanyLink = styled.a`

`

const JobCard = props => {
    return (
        // <>

        <Col md="5">
                <Card>
                    <Stack
                        flex
                        direction="row"
                        justify="start"
                    >
                        <CardInfo>
                            <Link href={"/jobs/" + props.jobid}>
                                <a>
                                    <Heading element="h2" type="title2" spaceAfter="small">{props.title}</Heading>
                                </a>
                            </Link>
                            <Stack
                                flex
                                direction="row"
                                justify="start"
                                spaceAfter="large"
                            >
                                <Text spaceAfter="large"> 
                                    <Suitcase size="small" color="secondary" /> <Link href="/#"><a>{props.company}</a></Link> 
                                </Text>
                                <Text spaceAfter="large"> <Clock size="small" color="secondary" />  {props.duration} </Text>
                            </Stack>
                            <Text type="secondary" spaceAfter="large"> {props.description}</Text>
                        </CardInfo>
                    </Stack>
                </Card>
        </Col>

    // </>
    )
};

export default JobCard;