import React from 'react';
import { connect } from 'react-redux';
import { asyncPostBlock } from '../../reducers/blocks';
import marked from 'marked';
import { browserHistory } from 'react-router';

//TODO: select whether this block will be markdown, latex, or diagram. save accordingly. associate with appropriate section.

class BlockForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      content: null,
      testMath: '`a^2 + b^2 = c^2`'
    };
    this.postBlock = this.postBlock.bind(this);
  }

  postBlock (e) {
    e.preventDefault();
    return this.props.createNewBlock({
      content: this.state.content,
      index: this.props.sections.length
    })
    .then(() => browserHistory.push('/')); //TODO: go to updated section at point of new block.
  }

  render () {
    return (
      <div>
        <p>Create new block</p>
        <form name="newBlockForm" onSubmit={this.postBlock}>
          <label htmlFor="content">Content</label>
          <br />
          <textarea name="content" onChange={evt => this.setState({content: evt.target.value})} />
          <br />
          <button type="submit">Submit</button>
        </form>
        <textarea onChange={evt => this.setState({testMath: evt.target.value})} />
        <p>{this.state.testMath}</p>
         <p> \(\frac a b\)</p>
      </div>
    );
  }
}

const mapStateToProps = ({ sections }) => ({
  sections
});

const mapDispatchToProps = (dispatch) => ({
  createNewBlock: (data) => dispatch(asyncPostBlock(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlockForm);
