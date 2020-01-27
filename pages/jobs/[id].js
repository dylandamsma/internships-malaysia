import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Hero from '../../components/hero';
import JobDetails from '../../components/jobs/details';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import JobSidebar from '../../components/jobs/sidebar';

import fetch from 'isomorphic-unfetch';

const singleJob = props => {
    const router = useRouter();

    return (
        <>
        <Header />
        {/* <Hero /> */}

        <Container>
            <Row justify="space-between" align="middle">
                {/* <Col xs="7" md="7" justify="space-between"> */}
                    <JobDetails 
                        title={props.title}
                        description={props.description}
                        company={props.company}
                        duration={props.duration}
                        featured={props.featured}
                    />
                    <JobSidebar />
                {/* </Col> */}
            </Row>
        </Container>

        </>
  )
}

singleJob.getInitialProps = async function(context) {
    const basePath =
          process.env.NODE_ENV === 'development'
              ? `http://localhost:${process.env.PORT || 3000}`
              : process.env.SITE_URL

    const { id } = context.query;

    const res = await fetch(`${basePath}/api/job?id=${id}`);
	const jobPost = await res.json();
  
    return jobPost ? jobPost.data : {};
    
  };

export default singleJob;
