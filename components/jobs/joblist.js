import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Loading from "@kiwicom/orbit-components/lib/Loading";
import Text from '@kiwicom/orbit-components/lib/Text';

import JobCard from './jobcard';

import useSWR from 'swr';

// Imports the data and converts the response to JSON if it isn't already :)
function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const JobList = props => {

    const { data: jobs, error } = useSWR('/api/jobs', fetcher);
    // Fetches all the data from the URL `/api/jobs/` and returns it in JSON format

    if (!jobs) return <Loading />; // Shows a loading icon while data is fetching
    if (error) result = 'Failed to fetch jobs.'; // If API returns an error, it will show this error message.

    // Map each job to the JobCard component so we can show each job in the list
    const jobItems = jobs.map((job) => 
        <JobCard
            key={job.id}
            jobid={job.id}
            title={job.title}
            company={job.company}
            duration={job.duration}
            description={job.description}
        />
    );

    console.log(jobs);

    return (    
        <Container>
            <Row justify="center">

                { /*  Renders all the jobcards */ }
                {jobItems}

            </Row>
        </Container>
    )
};

export default JobList;