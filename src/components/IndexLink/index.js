import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexLink extends Component {
  render() {
    return <Link {...this.props} onlyActiveOnIndex='true' activeClassName='active'/>
  }
}