import React, { Component } from 'react';
import NavLink from '../../components/NavLink';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul className='nav nav-pills'>
          <li><NavLink to='/admin' activeClassName='active'>Admin</NavLink></li>
          <li><NavLink to='/list' activeClassName='active'>Genre list</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
