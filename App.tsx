import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { ThumbGame2 } from './components/ThumbGame2';
import Dice from './components/Dice';
import ComponentC from './components/ComponentC';

export const store = React.createContext("");
export const diceNumber = React.createContext(0);

function App() {
  return (
    <div className="App">

      <h3>Game implementation - Thumbola</h3>

      <div className="row">
        <div className="col-8">
          <ThumbGame2 />
        </div>
        <div className="col-4 mt-2 text-primary">
          <h3>Rolling Dice..</h3>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Dice />

              <diceNumber.Provider value={0}>
                <center>
                  <ComponentC />
                </center>
              </diceNumber.Provider>

            </div>
          </div>
        </div>
      </div>



      <h3>Context Examples Here..</h3>
      <store.Provider value={"context value passing as a parameter"}>
        <center>
          <ComponentA />
          <ComponentB />
        </center>
      </store.Provider >

      <diceNumber.Provider value={0}>
        <center>
          <ComponentC />
        </center>
      </diceNumber.Provider>

    </div>
  );
}

export default App;
