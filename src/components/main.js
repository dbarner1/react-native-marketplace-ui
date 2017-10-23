import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import ForSale from './ForSale.js';
import Contact from './Contact.js';
import Checkout from './Checkout.js';

class Main extends Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
    this.state = {
      aisles: '',
      cart: []
    };
  }

  addProduct(new_product) {

    var cart_array = this.state.cart;
    cart_array.push("hi");

    this.setState({
      cart: cart_array
    })
  }


  render() {
    return (
      <div className="Main">
        <Switch>
          <Route
              exact
              path='/'
              render={ routeProps => <Home {...routeProps} /> }
          />
          <Route path='/forsale' render={ routeProps => <ForSale addProduct={this.addProduct} /> }/>
          <Route path='/contact' component={Contact}/>
          <Route path='/checkout' render={ routeProps => <Checkout cart={this.state.cart} /> }/>
        </Switch>
      </div>
    );
  }
}


export default Main;
