import React from 'react';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

export const ProductScreen = ({ match }) => {
  const product = products.find((product) => product._id === match.params._id);
  return (
    <div>
      <Button className='my-3' variant='light'>
        Go Back
      </Button>

      <Row>
        <Col lg={5}>
          <Image src={product.image} fluid></Image>
        </Col>
        <Col lg={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item as='h3'>{product.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col><strong>${product.price}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>
                  {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        
          <ListGroup>
            <Button
              className='btn-block'
              type='button'
              disabled={product.countInStock === 0 ? true : false}
            >
              ADD TO CART
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
