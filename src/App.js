import React, { useState } from 'react';
import {Route, Switch } from 'react-router-dom';
import Footer from './componant/Footer';
import Game from './componant/Game';
import Header from './componant/Header';
import Play from './componant/Play';


function App() {

const [myChoice, setMyChoice] = useState('');
const [score, setScore] = useState(0);

  return ( 
    <>
  <div className='container'>
 
    <Header score={score}/>
   
   <Switch>
     <Route exact path='/'>
       <Play setMyChoice={setMyChoice}/>
     </Route>
     <Route path='/game'>
       <Game myChoice={myChoice} score={score} setScore={setScore}/>
     </Route>
   </Switch>

    </div>
    <Footer/>
  </>
  )}

export default App;
