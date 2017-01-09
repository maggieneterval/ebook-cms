import React from 'react';
import { connect } from 'react-redux';

class BookForm extends React.Component {

  constructor () {
    super();
    this.postBook = this.postBook.bind(this);
    this.state = {
      title: null,
      subtitle: null
    };
  }

  postBook () {

  }

  render () {
    return (
      <div>
        <form name="bookForm" onSubmit={this.postBook}>
          <label htmlFor="title">Title</label>
          <br />
          <input name="title" onChange={evt => this.setState({title: evt.target.value})} />
          <br />
          <label htmlFor="subtitle">Subtitle</label>
          <br />
          <input name="subtitle" onChange={evt => this.setState({subtitle: evt.target.value})} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
