import Link from 'next/link';
import styled from 'styled-components';

import Stack from '@kiwicom/orbit-components/lib/Stack';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Suitcase from "@kiwicom/orbit-components/lib/icons/Suitcase";
import Clock from "@kiwicom/orbit-components/lib/icons/Clock";
import Badge from "@kiwicom/orbit-components/lib/Badge";

import { LocationOn } from "styled-icons/material/LocationOn";

import Fade from 'react-reveal/Fade';


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

const Text = styled.p`
    color: rgba(255,255,255,0.5);

    ${Card}:hover & {
        color: rgba(255,255,255,0.8);
    }
`

const JobCard = props => {

    const id = props.id

    return (
        <Fade bottom>
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
                                    <Heading element="h2" type="title2" spaceAfter="small" inverted>
                                    {props.featured === true &&
                                    <span css={'color:white;margin-right:5px;'}>
                                        👉 
                                    </span>
                                    }
                                        {props.title}
                                        
                                    </Heading>
                            <Stack
                                flex
                                direction="row"
                                justify="start"
                                spaceAfter="large"
                            >
                                <Text>
                                    <Suitcase size="small" color="secondary" /> {props.company}
                                </Text>
                                <Text>
                                    <LocationOn size="18"/> {props.location} 
                                </Text>
                            </Stack>
                            <Text type="secondary" spaceAfter="large"> {props.short_desc}</Text>
                            { props.skills && props.skills.map((skill) =>
                                    <span css={'margin-right: 10px;'}>
                                        <Badge type="dark">{skill}</Badge> 
                                    </span>
                                )
                            }
                        </CardInfo>
                    </Stack>
                </Card>
            </a>
        </Link>
    </Fade>
    )
};

export default JobCard;