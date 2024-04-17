
import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import FlexImage from './flex-image';

const ProductDetails = ({product}) => {

    const {title, price, category, description, image} = product;


  return (
    <Row className="g-4">
        <Col md={6}>
            <FlexImage src={image} alt={title} width="100%" height="500px" />            
        </Col>
        <Col md={6}>
            <h1>{title}</h1>
            <p>{description}</p>
            <h4 className="d-flex justify-content-between">
                <Badge bg="warning">${price}</Badge>
                <Badge>{category}</Badge>
                
            </h4>
        </Col>
        
    </Row>
  )
}

export default ProductDetails