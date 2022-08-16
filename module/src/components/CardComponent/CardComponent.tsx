import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './CardComponent.css'
import data from '../DataComponent/data';
import CardItem from '../CardComponent/CardTemplateComponent';

let globalstr : string; 


  const CardListComponent = () => {
    return(
        <>
        <h1>List of cars</h1>

        <Routes>
      <Route path="/" element={<ListFinal />}>

      </Route>
    </Routes>
        </>
    );
}

function handler(){
    localStorage.setItem("App_localStorage1", JSON.stringify({ name: {globalstr}}));
}



function ListFinal() {
  const navigation = useNavigate();
  
  
  return(<>
  <div className='total'>
    <div className='section'>
      {data.map((el) => (
        <CardItem key={el.id} id={el.id} title={el.title} text={el.text} item={el.item} url={el.url}/>

      ))}
    </div>
  </div>
  </>);
}

const NoMatchComponent = () => {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
}

export default CardListComponent;