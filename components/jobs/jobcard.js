import Link from 'next/link';
import styled from 'styled-components';

import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Heading from '@kiwicom/orbit-components/lib/Heading';
// import Text from '@kiwicom/orbit-components/lib/Text';

import Suitcase from "@kiwicom/orbit-components/lib/icons/Suitcase";
import Clock from "@kiwicom/orbit-components/lib/icons/Clock";

import Markdown from 'markdown-to-jsx';

import { paramCase } from "param-case";

const Card = styled.div`
    position: relative;
    background-color: ${props => props.featured ? "rgba(85,66,208,0.6)" : "rgba(52, 56, 68, 0.29)"};
    height: auto;
    width: 780px;
    // box-shadow: 0 1px 6px 0 rgba(0,0,0,0.06);
    padding: 20px 30px;
    transition: all 300ms ease;
    border-radius: 3px;
    margin-bottom: 25px;
    cursor: pointer; 

    & :hover {
        background-color: ${props => props.featured ? "rgba(85,66,208,0.75)" : "rgba(52, 56, 68, 0.4)"};
    }
`;

const CardInfo = styled.div`
    width: 80%;
`

const CompanyLink = styled.a`

`

const Text = styled.p`
    color: rgba(255,255,255,0.5);

    ${Card}:hover & {
        color: rgba(255,255,255,0.8);
    }
`

const JobCard = props => {

    const id = props.id
    const permalink = !!id ? `/jobs/${id}` : false

    return (
        <Link href='/jobs/[id]' as={`/jobs/${id}`}>
            <a>
                <Card featured={props.featured}>
                    <Stack
                        flex
                        direction="row"
                        justify="start"
                    >
                        <CardInfo>
                            {/* TODO - Pass Data to the single job page */}
                                    <Heading element="h2" type="title2" spaceAfter="small" inverted>{props.title}</Heading>
                            <Stack
                                flex
                                direction="row"
                                justify="start"
                                spaceAfter="large"
                            >
                                <span css={'color:white'}>
                                    {props.featured ? '* Featured' : ''}
                                </span>
                                <Text>
                                    <Suitcase size="small" color="secondary" /> {props.company}
                                </Text>
                                <Text>
                                    <Clock size="small" color="secondary" /> {props.duration} 
                                </Text>
                            </Stack>
                            <Text type="secondary" spaceAfter="large"> {props.short_desc}</Text>
                        </CardInfo>
                    </Stack>
                </Card>
            </a>
        </Link>

    )
};

export default JobCard;