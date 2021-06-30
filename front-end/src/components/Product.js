import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
      <Card.Img src={`${product.image}`}></Card.Img>
      </Link>
      <Card.Body as='div'>
        <Link to={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating key={product._id} value={product.rating} text={`${product.numReviews} reviews`}/>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default Product;
