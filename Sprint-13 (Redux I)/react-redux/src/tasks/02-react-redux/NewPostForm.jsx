import React, { Component } from "react";
import { addNewPost } from "./actions";
import { connect } from "react-redux";

export class NewPostForm extends Component {
  state = {
    title: "",
    selectedAuthor: null,
  };

  onSelectedAuthorChanged = (e) => {
    const { value } = e.target;
    this.setState({ selectedAuthor: value || null })
  }

  onPostTitleChanged = (e) => {
    const { value } = e.target;
    this.setState({ title: value });
  }

  onAddNewPostClicked = () => {
    const { selectedAuthor, title } = this.state;

    if (selectedAuthor !== null && title !== '') {
      this.props.addNewPost(selectedAuthor, title);
      this.setState({ title: '', selectedAuthor: null })
    }
    return this.state;
  }

  render() {
    const { title = "", selectedAuthor = null } = this.state;
    const { authors = [] } = this.props;

    const authorsOptions = authors.map(author => <option key={author.authorId} value={author.authorId}>{author.name}</option>);
    authorsOptions.unshift(<option key="empty" value="" />);

    return (
      <div>
        <h4>New Post</h4>
        <input type="text" onChange={this.onPostTitleChanged} value={title} />
        <div>Author: <select value={selectedAuthor || ''} onChange={this.onSelectedAuthorChanged}>{authorsOptions}</select></div>
        <div><button onClick={this.onAddNewPostClicked}>Add New Post</button></div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    title: state.title,
    selectedAuthor: state.selectedAuthor,
    authors: state.authors
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addNewPost: (aut, tit) => dispatch(addNewPost(aut, tit))
  })
}

export default connect(mapState, mapDispatchToProps)(NewPostForm);
