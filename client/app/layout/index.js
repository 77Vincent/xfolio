import React, { Component } from 'react';
import '../../node_modules/normalize.css/normalize.css'; // CSS normalizer
import Header from '../components/Header';
import Footer from '../components/Footer';

// @connect((state, props) => ({}))
export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Header/>

        {children}
        
        <Footer/>
      </div>
    );
  }
}
