import React, { FC, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useCardContext } from '../../context/CardContext';

type CardPros = {
    id: number;
    title: string;
    text: string;
    item: string;
    url : string;
}

const CardItem = (props : CardPros) => {
    const { add, remove } = useCardContext();
    return (
        <div className='item'>
            <Card>
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>{props.item}</ListGroup.Item>
                <div className='btn-style'>
                   <Button href={props.url}>More info</Button>
                   <Button onClick={() => add(props.id)}>Add</Button> 
                   <Button onClick={() => remove(props.id)}>Remove</Button> 
                </div>
                
                </ListGroup>
                <Card.Body>
                </Card.Body>
            </Card>
        </div>
     
    );
  }

  export default CardItem;