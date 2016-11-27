import React from 'react';
import { Grid } from 'reflexbox';
import Sidebar from './Sidebar';

export default class App extends React.Component {

  constructor () {
    super();
  }

  getChildContext () {
    return {
      reflexbox: {
        breakpoints: {
          sm: '(min-width: 30em)',
          md: '(min-width: 48em)',
          lg: '(min-width: 60em)'
        }
      }
    }
  }
  render () {
    return (
      <div>
        <Grid col={3} px={2}>
          <Sidebar />
        </Grid>
        <Grid col={9} px={2}>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.childContextTypes = {
  reflexbox: React.PropTypes.object
};
