import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col className='col-lg-3 md-4 sm-2'>
              <Product product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
