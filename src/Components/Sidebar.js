import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <p>Sidebar</p>
        <Link to="new">New Chapter</Link>
        {
          this.props.chapters.sort((a,b) => a.index - b.index)
          .map(chapter => (
            <div key={chapter.id}>
              <Link to={chapter.index.toString()}>{chapter.title}</Link>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({ chapters }) => ({
  chapters
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);