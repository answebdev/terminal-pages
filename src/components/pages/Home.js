import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import logo from '../../img/logo.png';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Terminal Pages</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div>
          <Row>
            {/* <Col md={4}></Col> */}
            <Col md={12}>
              <div id='logo-div'>
                <Image
                  id='logo'
                  fluid
                  src={logo}
                  // roundedCircle
                  // style={{
                  //   width: '35%',
                  //   height: 'auto',
                  // }}
                />
              </div>
            </Col>
            {/* <Col md={4}></Col> */}
          </Row>
          <Row>
            <Col md={12}>
              <br />
              <p id='page-title'>Terminal Pages</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
