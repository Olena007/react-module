import React, { FC, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useCardContext } from '../../context/CardContext';
import handler from '../CardComponent/CardComponent';
import data from '../DataComponent/data'

type CardElementProps ={
    id: number
}

function CardElement({id}: CardElementProps){
    const { remove } = useCardContext();

    const el = data.find(e => e.id === id)

    if(el === null) return null

    return(
        <Card>
            <Card.Title>{el?.title}</Card.Title>
                <Card.Text>{el?.text}</Card.Text>
            <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{el?.item}</ListGroup.Item>
                    <div className='btn-style'>
                        <Button onClick={() => remove(el!.id)}>Remove</Button> 
                    </div>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

function BasketComponent () {
    const { AllofCards } = useCardContext();

    return(
        <div>
            <h1>Basket</h1> 
            {AllofCards.map(el => (
                <CardElement  key={el.id} {...el}/>
            ))}
            {/* <p>{localStorage.getItem("App_localStorage1")}</p> */}
        </div>
    );
}

export default BasketComponent;