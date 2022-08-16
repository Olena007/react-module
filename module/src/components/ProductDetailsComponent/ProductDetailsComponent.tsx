import React, { FC, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import details from '../DataComponent/productDetails';

type ProductPros = {
    id: number;
    url: string;
    logo: string;
    text: string;
}

const ProductItem = (props: ProductPros) => {
    return(<>
    <li><Link to="/">Go Home</Link></li>
        <Card>
      <Card.Body>
      <Card.Img variant="top" src={props.url} style={{width: '400px'}}/>
        <Card.Title>{props.logo}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    </>);
}

export default ProductItem;
