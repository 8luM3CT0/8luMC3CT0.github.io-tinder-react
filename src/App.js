import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ChatPage from './ChatPage';
import ChatScreen from './ChatScreen';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import ChatPage2 from './ChatPage2';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
      <Route path="/chat/Bruce">
        <Header  backButton="/chat"/>
        <ChatPage />
      </Route>
      <Route path="/chat/Carol">
      <Header backButton="/chat" />
      <ChatPage2 />
      </Route>
      <Route path="/chat">
        <Header  backButton="/"/>
        <ChatScreen />
      </Route>
      <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
        </Route>
      </Switch>
      </Router>
    
      </div>
  );
}

export default App;

