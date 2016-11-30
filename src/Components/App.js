import React from 'react';
import Sidebar from './Sidebar';

export default class App extends React.Component {

  constructor () {
    super();
  }

  render () {
    return (
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}
