import React, { Component } from 'react';
import '../asset/css/grid.css'
import '../asset/css/App.css';
import Header from './Header';
import Slider from './Slider';
import Navigate from './Navigate';
import Product from './Product';
import Productsearch from './Productsearch';
import Footer from './Footer';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app grid wide">
          <Header/>
          <Slider/>
          <div className="containerbody">
              <div className="row ">
                  <Navigate/>
                    <Switch>
                      <Route path="/Product">
                      <Product/>
                      </Route>
                      <Route path="/ProductSearch">
                      <Productsearch/>
                      </Route>
                    </Switch>
              </div>
          </div>
          <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;