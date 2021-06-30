import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded'>
      <a href={`/product/${product._id}`}>
      <Card.Img src={`${product.image}`}></Card.Img>
      </a>
      <Card.Body as='div'>
        <a href={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
        </a>
        <Card.Text as='p'>
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default Product;
