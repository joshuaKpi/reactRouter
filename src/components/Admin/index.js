import React, { Component } from 'react';

export default class Admin extends Component {
  static onEnter() {}
/*  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login');
    if (login !== 'admin') {
      replace('/');
    } else {
      console.log('Access granted');
    }
  }*/

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /admin</div>
      </div>
    )
  }
}
