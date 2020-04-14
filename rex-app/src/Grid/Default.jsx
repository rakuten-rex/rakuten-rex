import React from 'react';
import { Row, Container, Col } from '@rakuten-rex/grid/Grid';
import './example-util.scss';

export default function MyComponent() {
  return (
    <Container className='rex-grid-example'>
      <Row key='grid-title'>
        <Col key='grid'>
          <span class="rex-grid-d-xs-none">
            XS - Mobile<br />
            Breakpoint &lt; 320px<br />
            Max container width 290px
          </span>
          <span class="rex-grid-d-none rex-grid-d-xs-block rex-grid-d-sm-none">
            XS - Mobile<br />
            Breakpoint ≥ 375px<br />
            Max container width 345px
          </span>
          <span class="rex-grid-d-none rex-grid-d-sm-block rex-grid-d-md-none">
            SM - Mobile<br />
            Breakpoint ≥ 414px<br />
            Max container width 384px
          </span>
          <span className='rex-grid-d-none rex-grid-d-md-block rex-grid-d-lg-none'>
            MD - Tablet<br />
            Breakpoint ≥ 768px<br />
            Max container width 696px
          </span>
          <span className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-none'>
            LG - Desktop<br />
            Breakpoint ≥ 1024px<br />
            Max container width 936px
          </span>
          <span className='rex-grid-d-none rex-grid-d-xl-block rex-grid-d-xxl-none'>
            XL - Desktop HD<br />
            Breakpoint ≥ 1280px<br />
            Max container width 1224px
          </span>
          <span className='rex-grid-d-none rex-grid-d-xxl-block'>
            XXL - Desktop HD+<br />
            Breakpoint ≥ 1440px<br />
            Max container width 1320px
          </span>
        </Col>
      </Row>
      <Row className='rex-grid-row-example' key='grid-content'>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' key='grid0'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' key='grid1'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' key='grid2'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' key='grid3'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-md-block rex-grid-d-lg-block rex-grid-d-xl-block' key='grid4'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-md-block rex-grid-d-lg-block rex-grid-d-xl-block' key='grid5'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-block' key='grid6'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-block' key='grid7'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-block' key='grid8'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-block' key='grid9'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-block' key='grid10'>
          <span />
        </Col>
        <Col xs='3' sm='3' md='2' lg='1' xl='1' className='rex-grid-d-none rex-grid-d-lg-block rex-grid-d-xl-block' key='grid11'>
          <span />
        </Col>
      </Row>
    </Container>
  );
}
