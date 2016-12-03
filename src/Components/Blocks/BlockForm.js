import React from 'react';
import { connect } from 'react-redux';
import { asyncPostBlock } from '../reducers/blocks';
import marked from 'marked';
import { browserHistory } from 'react-router';

class BlockForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      testMath: '`a^2 + b^2 = c^2`'
    };
    this.postBlock = this.postBlock.bind(this);
  }

  postBlock (e) {
    e.preventDefault();
    return this.props.createNewChapter({
      title: this.state.title,
      content: marked(this.state.content),
      index: this.props.chapters.length
    })
    .then(() => browserHistory.push(`/${this.props.chapters.length -1}`));
  }

  render () {
    return (
      <div>
        <p>Create new chapter</p>
        <form name="newChapterForm" onSubmit={this.postBlock}>
          <label htmlFor="title">Title</label>
          <br />
          <input name="title" onChange={evt => this.setState({title: evt.target.value})} />
          <br />
          <label htmlFor="content">Content</label>
          <br />
          <textarea name="content" onChange={evt => this.setState({content: evt.target.value})} />
          <br />
          <button type="submit">Submit</button>
        </form>
        <textarea onChange={evt => this.setState({testMath: evt.target.value})} />
        <p>{this.state.testMath}</p>
         <p> \(\frac a b\)</p>
          <p>MathML: <math><msqrt><mi>x</mi></msqrt></math></p>
          <p>AsciiMath: `a^2 + b^2 = c^2`</p>
      </div>
    );
  }
}

const mapStateToProps = ({ chapters }) => ({
  chapters
})

const mapDispatchToProps = (dispatch) => ({
  createNewChapter: (data) => dispatch(asyncPostChapter(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewChapterForm);
