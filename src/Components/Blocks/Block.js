import React from 'react';
import marked from 'marked';

//will map over given section's blocks, passing each block obj as props to Block component:

class Block extends React.Component {

  render ({ block }) {
    return (
      <div dangerouslySetInnerHTML={{__html: marked(block.content)}}>
      </div>
    );
  }
}

export default Block;
