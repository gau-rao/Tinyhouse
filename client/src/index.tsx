
import React from 'react';
import { render} from 'react-dom';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import {Home,Host ,Listings,Listing,NotFound,User} from "./sections";
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
const client = new ApolloClient({
uri : "/api",
});

const App =() => {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/host" component={Host} />
        <Route exact path ="/listing/:id" component={Listing} />
        <Route exact path ="/listings/:location?" component={Listings} />
        <Route exact path ="/user/:id" component={User} />
        <Route  component={NotFound} />



      </Switch>
    </Router>

  )
}
 render( 
   <ApolloProvider client = {client}>
  <App />
  </ApolloProvider>,       
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
