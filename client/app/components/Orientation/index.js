import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import './index.less';

export default class Orientation extends  Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.fetchData() 
  }
  async fetchData() {
  }
  render() {
    return (
      <div className='Orientation'>
      </div>
    )
  }
}