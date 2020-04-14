import React, { Suspense } from 'react';
import { Route, Switch as RouterSwitch, Link as RouterLink } from 'react-router-dom';
import { Row, Container, Col } from '@rakuten-rex/grid/Grid';

export default function Page(main, list) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterSwitch>
        {/* Main route */}
        <Route exact path={`/${main}/`}>
          <Container>
            <Row key='breadcrumbs'>
              <Col>
                <RouterLink to="/">Home</RouterLink>
                {` / `}
                {main}
              </Col>
            </Row>
            <Row key='title'>
              <Col>
                <h1>{main}</h1>
              </Col>
            </Row>
            <Row key='index'>
              <Col>
                <ul>
                  {
                    list.map(({ name }) => {
                      return (
                        <li key={`page-content-${name}`}>
                          <RouterLink to={`/${main}/${name}`}>{name}</RouterLink>
                        </li>
                      )
                    })
                  }
                </ul>
              </Col>
            </Row>
          </Container>
        </Route>
        {/* Components variations routes */}
        {
          list.map(({ name, Component }) => {
            const githubUrl = 'https://github.com/rakuten-rex/rakuten-rex/blob/develop/rex-app/src';
            return (
              <Route path={`/${main}/${name}`} key={`route-${name}`}>
                <Container>
                  <Row key='breadcrumbs'>
                    <Col>
                      <RouterLink to="/">Home</RouterLink>
                      {` / `}
                      <RouterLink to={`/${main}/`}>{main}</RouterLink>
                      {` / `}
                      {name}
                    </Col>
                  </Row>
                  <Row key='title'>
                    <Col xs='10'>
                      <h1>{name}</h1>
                    </Col>
                    <Col xs='2'>
                      <a href={`${githubUrl}/${main}/${name}.jsx`}>Github source code</a>
                    </Col>
                  </Row>
                  <div id="react-code-sample">
                    <Component />
                  </div>
                </Container>
              </Route>
            )
          })
        }
      </RouterSwitch>
    </Suspense>
  );
}
