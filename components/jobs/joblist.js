import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import JobCard from './jobcard';

import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const JobList = props => {

    const { data, error } = useSWR('/api/randomQuote', fetcher);
    // The following line has optional chaining, added in Next.js v9.1.5,
    // is the same as `data && data.author`
    const author = data?.author;
    let quote = data?.quote;

    if (!data) quote = 'Loading...';
    if (error) quote = 'Failed to fetch the quote.';

    return (    
        <Container>
            <Row justify="center">
                <JobCard 
                    title="Junior Coffee Ninja"
                    company="Foundingbird Sdn Bhd"
                    duration="3 - 6 Months"
                    description="Foundingbird is looking for a brave soldier who can man the printer, swiftly produce paper copies of digital documents and digitise even the most mundane of documents"
                    tags={["Accounting", "Paid", "6 Months"]}
                />
                <JobCard 
                    title="Senior Printing Steward"
                    company="Foundingbird Sdn Bhd"
                    duration="2 Months"
                    description="Foundingbird is looking for a brave soldier who can man the printer, swiftly produce paper copies of digital documents and digitise even the most mundane of documents"
                    tags={["Accounting", "Paid", "6 Months"]}
                />
                <JobCard 
                    title="Receipt copy duty"
                    company="Foundingbird Sdn Bhd"
                    duration="3 Months"
                    description="Foundingbird is looking for a brave soldier who can man the printer, swiftly produce paper copies of digital documents and digitise even the most mundane of documents"
                    tags={["Accounting", "Paid", "6 Months"]}
                />
            </Row>
        </Container>
    )
};

export default JobList;