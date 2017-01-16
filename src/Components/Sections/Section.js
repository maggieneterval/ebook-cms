import React from 'react';
import { connect } from 'react-redux';
import Block from '../Blocks/Block';

class Section extends React.Component {

  render () {
    const { sections, params } = this.props;
    const section = sections[0]; //to-do: currentSection on state, or in params?
    return (
      <div>
        <h1>Title: {section.title}</h1>
        {section && section.blocks && section.blocks.map(block => (
          <Block key={block.id} block={block} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ sections }) => ({
  sections
});

export default connect(mapStateToProps)(Section);
