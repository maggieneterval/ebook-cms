import React from 'react';

class Chapter extends React.Component {

  render () {
    console.log('this.params: ', this.props.params)
    return (
      <div>
        <p>Chapter {this.props.params.chapter}</p>
      </div>
    );
  }
}

export default Chapter;
