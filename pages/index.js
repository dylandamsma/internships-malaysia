import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import JobCard from '../components/jobs/jobcard';

import fetch from 'isomorphic-unfetch';

const Index = props => {

  const jobItems = props.jobs.map((job) => 

      <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          slug={job.slug}
          company={job.company}
          companyid={job.company_id}
          duration={job.duration}
          description={job.description}
          short_desc={job.short_desc}
          featured={job.featured}
      />

  );

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Row justify="center">
            {jobItems}
        </Row>
      </Container>
    </>
  )
}

Index.getInitialProps = async function() {
  
  const basePath =
		process.env.NODE_ENV === 'development'
			? `http://localhost:${process.env.PORT || 3000}`
			: process.env.SITE_URL

	const res = await fetch(`${basePath}/api/jobs`);
  const jobPosts = await res.json();

  // console.log(jobPosts);

  return {
    jobs: jobPosts.data
  };
  
};

export default Index;