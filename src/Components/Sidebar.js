import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <p>Sidebar</p>
        
      </div>
    );
  }
}

const mapStateToProps = ({ sections }) => ({
  sections
});

export default connect(mapStateToProps)(Sidebar);


// <Link to="new">New Section</Link>
//         {
//           this.props.sections.sort((a,b) => a.index - b.index)
//           .map(section => (
//             <div key={section.id}>
//               <Link to={section.index.toString()}>{section.title}</Link>
//             </div>
//           ))
//         }