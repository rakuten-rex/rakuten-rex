import React from 'react';
import { Route, Switch as RouterSwitch, Link as RouterLink } from 'react-router-dom';
import { Row, Container, Col } from '@rakuten-rex/grid/Grid';

export default function Home() {
  const pages = [
    'Button',
    'Checkbox',
    'Grid',
    'Panel',
    'Password',
    'RadioButton',
    'Select',
    'Stepper',
    'Switch',
    'TextField',
    'Textarea',
    'Track',
  ];

  return (
    <RouterSwitch>
      <Route exact path="/">
        <Container>
          <Row key='breadcrumbs'>
            <Col>
              <RouterLink to="/">Home</RouterLink>
            </Col>
          </Row>
          <Row key='title'>
            <Col>
              <h1>ReX Front-end Components Library <small>React Code Samples</small></h1>
            </Col>
          </Row>
          <Row key='index'>
            <Col>
              <h2>Forms</h2>
              <ul>
                {
                  pages.map(pageName => {
                    return (
                      <li key={`page-${pageName}`}>
                        <RouterLink to={`/${pageName}`}>{pageName}</RouterLink>
                      </li>
                    );
                  })
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </Route>
    </RouterSwitch>
  )
}
