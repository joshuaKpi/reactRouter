import React, { Component } from 'react';
import NavLink from '../../components/NavLink';
import IndexLink from '../../components/IndexLink';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul className='nav nav-pills'>
          <li><IndexLink to='/'>Main</IndexLink></li>
          <li><NavLink to='/admin'>Administrate</NavLink></li>
          <li><NavLink to='/list'>Genre list</NavLink></li>
          <li><NavLink to='/login'>LogIn</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
