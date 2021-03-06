import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import AddQs from './components/AddQs';
import ShowQs from './components/ShowQs';
import Advertising from './components/Advertising'
import './App.css';
import {QuestionProvider} from "./components/context"

function App() {
  return (
    <div className="container">
      <QuestionProvider>
        <Header/>
        <Instructions/>
        <AddQs/>
        <ShowQs/>
        <Advertising />
      </QuestionProvider>
      
    </div>
  );
}
export default App;
