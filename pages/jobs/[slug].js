import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Hero from '../../components/hero';
import JobDetails from '../../components/jobs/details';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import JobSidebar from '../../components/jobs/sidebar';
import { getCountryProps } from '@kiwicom/orbit-components/lib/CountryFlag';

export default () => {
    const router = useRouter();

    return (
        <>
        <Header />
        <Hero />

        <Container>
            <Row justify="center" align="middle">
                {/* <Col xs="7" md="7" justify="space-between"> */}
                    <JobDetails 
                        title={router.query.slug}
                    />
                    <JobSidebar />
                {/* </Col> */}
            </Row>
        </Container>

        </>
  )
}
