import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul className='nav nav-pills'>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/list'>Genre list</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
