import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import logo from '../../img/logo.png';
import terminal from '../../img/tp-logo.png';

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
            <Col md={12}>
              <Image id='logo' fluid src={logo} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <br />
              <p id='page-title'>Raygun Circus | Adolf N.S.</p>
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <center>
                <Button
                  href='https://rayguncircus.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  Raygun Circus (Official Website)
                </Button>
              </center>
              <center>
                <Button
                  href='https://rayguncircus.bandcamp.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  Raygun Circus on Bandcamp
                </Button>
              </center>
              <center>
                <Button
                  href='https://www.amazon.com/dp/057852001X?ref_=pe_3052080_397514860'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  Terminal Fiction on Amazon
                </Button>
              </center>
              <center>
                <Button
                  href='https://www.goodreads.com/book/show/51301085-terminal-fiction?from_search=true&from_srp=true&qid=OyBF3iphXJ&rank=2'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  Terminal Fiction on Goodreads
                </Button>
              </center>
              <center>
                <Button
                  href='https://www.instagram.com/adolfns/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  Instagram
                </Button>
              </center>
              <center>
                <Button
                  href='https://coricelesti.bandcamp.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  Cori Celesti on Bandcamp
                </Button>
              </center>
              <center>
                <Button
                  href='https://ansmusic.bandcamp.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='main-btn'
                  variant='secondary'
                  size='lg'
                  block
                >
                  A.N.S. on Bandcamp
                </Button>
              </center>
            </Col>
            <Col md={3}></Col>
          </Row>
          {/* //{' '}
          <Row>
            //{' '}
            <Col md={12}>
              // <br />
              // <p id='bottom-title'>Terminal Pages</p>
              //{' '}
            </Col>
            //{' '}
          </Row> */}
          <Row>
            <Col md={12}>
              <Image id='tp-logo' fluid src={terminal} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
