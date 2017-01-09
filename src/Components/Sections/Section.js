import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked'

class Section extends React.Component {

  render () {
    const { sections, params } = this.props;
    const section = sections[0];
    return (
      <div>
        <h1>Title: {section.title}</h1>
        <p>Content:</p>

      </div>
    );
  }
}

const mapStateToProps = ({ sections }) => ({
  sections
});

export default connect(mapStateToProps)(Section);
