import React from 'react';
import Logo from './components/logo';
import './styles/App.css';
/*import Home from './components/Home';
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import { Security, ImplicitCallback } from '@okta/okta-react';*/
import Login from './components/loginFields';

/*const config = {
  issuer: 'https://dev-742612/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa1hyn6l5LCNGwOj357',
  pkce: true
}*/

function Dashboard() {
  return (
   
    <div className="Dashbaord">
      <header className="App-header">
      
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

        
        <Login/>
        
        
      </header>
    </div>
  );
}

export default Dashboard;
