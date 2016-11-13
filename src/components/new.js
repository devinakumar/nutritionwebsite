import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      tags: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }
  onTitleChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onContentChange(event) {
    console.log(event.target.value);
    this.setState({ content: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onTagChange(event) {
    console.log(event.target.value);
    this.setState({ tags: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onCreate(event) {
    // this.props.onSubmit(this.state.notecontent);
    this.props.createPost({ title: this.state.title, content: this.state.content, tags: this.state.tags });
  }
  render() {
    return (
      <div id="input-bar">
        <form>
          <input placeholder="type your title" onChange={this.onTitleChange} value={this.state.title} />
        </form>
        <form>
          <input placeholder="type your content" onChange={this.onContentChange} value={this.state.content} />
        </form>
        <form>
          <input placeholder="type your tags" onChange={this.onTagChange} value={this.state.tags} />
        </form>
        <form>
          <input type="button" value="New post!" onClick={this.onCreate} />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => (
//   {
//     posts: state.posts.all,
//   }
// );
const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    posts: state.posts.all,
    foods: state.foods.all,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(New);
// export default New;
