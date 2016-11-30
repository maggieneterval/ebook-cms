import React from 'react';
import { connect } from 'react-redux';

class Chapter extends React.Component {

  render () {
    console.log('chapters: ', this.props.chapters);
    console.log('index: ', Number(this.props.params.chapter));
    const { chapters, params } = this.props;
    const chapter = chapters[Number(params.chapter)];
    return (
      <div>
        <h1>Title: {chapter.title}</h1>
        <p>Content:</p>
        <div dangerouslySetInnerHTML={{__html: chapter.content}}>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chapters }) => ({
  chapters
});

export default connect(mapStateToProps)(Chapter);
