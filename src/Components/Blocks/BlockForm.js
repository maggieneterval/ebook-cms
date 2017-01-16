import React from 'react';
import { connect } from 'react-redux';
import { asyncPostBlock } from '../../reducers/blocks';
import marked from 'marked';
import { browserHistory } from 'react-router';
import * as MathJax from 'react-mathjax';

//TODO: select whether this block will be markdown, latex, or diagram. save accordingly. associate with appropriate section.

class BlockForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      type: 'latex',
      content: 'a^2 + b^2 = c^2',
      preview: ''
    };
    this.postBlock = this.postBlock.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
  }

  renderPreview (){
    this.setState({preview: this.state.content});
  }

  postBlock (e) {
    e.preventDefault();
    console.log(this.state);
    // return this.props.createNewBlock({
    //   content: this.state.content,
    //   index: this.props.sections.length
    // })
    // .then(() => browserHistory.push('/')); //TODO: go to updated section at point of new block.
  }

  render () {
    return (
      <div>
        <div>
          <p>Create new block</p>
          <form name="newBlockForm" onSubmit={this.postBlock}>
            <label htmlFor="type">Select input type
              <select name="type" value={this.state.type} onChange={evt => this.setState({type: evt.target.value})}>
                <option value="markdown">markdown</option>
                <option value="latex">latex</option>
              </select>
            </label>
            <label htmlFor="content">Content
              <textarea name="content" value={this.state.content} onChange={evt => this.setState({content: evt.target.value})} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <button onClick={this.renderPreview}>Preview your block</button>
          {this.state.type === 'markdown' ?
            <p dangerouslySetInnerHTML={{__html: marked(this.state.preview)}}></p> : null}
          {this.state.type === 'latex' ?
            <MathJax.Context>
              <MathJax.Node>{this.state.preview}</MathJax.Node>
            </MathJax.Context> : null}
        </div>
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
