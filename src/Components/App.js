import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default class App extends React.Component {

  render () {
    return (
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
