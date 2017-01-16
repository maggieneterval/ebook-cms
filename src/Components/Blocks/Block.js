import React from 'react';
import marked from 'marked';

//will map over given section's blocks, passing each block obj as props to Block component:

class Block extends React.Component {

  render () {
    const {block} = this.props;
    return (
      <div>
        {block.type === 'markdown' ?
          <div dangerouslySetInnerHTML={{__html: marked(block.content)}}></div>
          : <div dangerouslySetInnerHTML={{__html: block.content}}></div>
        }
      </div>
    );
  }
}

export default Block;
