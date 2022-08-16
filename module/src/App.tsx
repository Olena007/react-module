import './App.css';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Cards from "../src/components/CardComponent/CardComponent"
import CardListComponent from '../src/components/CardComponent/CardComponent';
import BasketComponent from './components/BasketComponent/BasketComponent';
import React, { useState } from 'react';
import ProductItem from '../src/components/ProductDetailsComponent/ProductDetailsComponent';
// import MoreBMWComponent from '../src/components/ProductDetailsComponent/ProductDetailsComponent';
// import MoreAudiComponent from '../src/components/ProductDetailsComponent/ProductDetailsComponent';
// import MoreRenoComponent from '../src/components/ProductDetailsComponent/ProductDetailsComponent';
import logo from './logo.svg';
import { isTemplateSpan } from 'typescript';
import { CardStart } from './context/CardContext';

type User = { name: string };




function App() {
  return (
    <CardStart>
      <div>
        <div className='flex'>
          <Link to="/">Home</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/basket">Basket</Link> 
        </div>
        
      <Routes>
        <Route path="/" element={<CardsList />}></Route>

        <Route path="cards" element={<CardListComponent />}></Route>
        <Route path="*" element={<NoMatchComponent />} />

        <Route path="/" element={<MoreComponent />}>
          <Route path="1" element={<MoreBMWComponent />}></Route>
          <Route path="2" element={<MoreAudiComponent />}></Route>
          <Route path="3" element={<MoreRenoComponent />}></Route>
        </Route>
        <Route path="basket" element={<BasketComponent />} ></Route>
      </Routes>

      </div>
  </CardStart>
  );
}

function MoreStart(){
  const navigation = useNavigate();

}

const MoreComponent = () => {
  const navigation = useNavigate();

  return(<>
  <h1>Selected car</h1>
  
  <Outlet />
  </>);
} 

const MoreBMWComponent = () => {
  return(
      <>
      <ProductItem key={1} id={1} url={"https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/i7/720x720_Key_Visual.jpg.grp-transform/small/720x720_Key_Visual.jpg"} logo={"BMW"} text={"Full info Full infoFull info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info"}/>
      </>
  );
}

const MoreAudiComponent = () =>{
  return(<>
  <ProductItem key={2} id={2} url={"https://audimediacenter-a.akamaihd.net/system/production/media/90567/images/72391bd2d21a80a761f0df1bd5bff197d5804daa/A201895_x500.jpg?1583155437"} logo={"Audi"} text={"Full info Full infoFull info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info "} />
  </>);
}

const MoreRenoComponent = () =>{
  return(<>
  <ProductItem key={3} id={3} url={"https://www.topgear.com/sites/default/files/cars-car/image/2020/12/18390-mganesport.jpg"} logo={"Reno"} text={"Full info Full infoFull info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info "}/>
  </>);
}

function CardsList() {
  const navigation = useNavigate();

  return(
    <div>
        MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE 
    </div>
  );
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

export default App;
