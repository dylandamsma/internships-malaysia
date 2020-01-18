import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import JobCard from './jobcard';

const JobList = props => {
    return (    
        <Container>
            <Row justify="center">
                <JobCard />
            </Row>
        </Container>
    )
};

export default JobList;