
import { Component } from 'react';
import './App.css';
import { Bag } from './Components/Bag';
//import { Carosal } from './Components/Carosal';
import { Gift } from './Components/gift';
import { Shipping } from './Components/Shipping';
import { TopOffer } from './Components/TopOffer';

function App() {
  return (
    <div className="App">
     {/* <Gift></Gift> */}
     {/* <TopOffer></TopOffer> */}
     <Bag></Bag>
     {/* <Shipping></Shipping> */}
    
    </div>
  );
}

export default App;
