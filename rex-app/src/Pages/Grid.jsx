import React from 'react';
import { Row, Container, Col } from '@rakuten-rex/grid/Grid';

export default function Index() {
  return (
    <>
      <h1>Grid</h1>
      <Container>
        <Row>
          <Col>
          Content Left
          </Col>
          <Col>
          Content Right
          </Col>
        </Row>
      </Container>
    </>
  );
}
