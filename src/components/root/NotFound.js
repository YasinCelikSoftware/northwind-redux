import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';

export default class NotFound extends Component {
  render () {
    return (
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{height: '90vh'}}
        >
          <Col xs="auto">
            <h1>PAGE NOT FOUND</h1>
            <Link to="/">Anasayfaya Dön</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
