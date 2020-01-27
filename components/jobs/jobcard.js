import Link from 'next/link';
import styled from 'styled-components';

import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';

import Suitcase from "@kiwicom/orbit-components/lib/icons/Suitcase";
import Clock from "@kiwicom/orbit-components/lib/icons/Clock";

import Markdown from 'markdown-to-jsx';

import { paramCase } from "param-case";

const Card = styled.div`
    position: relative;
    background-color: rgba(52, 56, 68, 0.29);
    height: auto;
    width: 780px;
    // box-shadow: 0 1px 6px 0 rgba(0,0,0,0.06);
    padding: 20px 30px;
    transition: all 300ms ease;
    border-radius: 3px;
    margin-bottom: 25px;
    cursor: pointer; 

    & :hover {
        background-color: rgba(52, 56, 68, 0.4);
    }
`;

const CardInfo = styled.div`
    width: 80%;
`

const CompanyLink = styled.a`

`

const JobCard = props => {

    // Convert the job title to a slug
    // const compslug = paramCase(props.company);
    const id = props.id
    const permalink = !!id ? `/jobs/${id}` : false

    return (

        <Link href={id} as={`/jobs/${id}`}>
            <a>
                <Card>
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
                                <Text spaceAfter="large"> 
                                    <Suitcase size="small" color="secondary" /> <Link href={"/company/" + props.company}><a>{props.company}</a></Link> 
                                </Text>
                                <Text spaceAfter="large"> <Clock size="small" color="secondary" />  {props.duration} </Text>
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