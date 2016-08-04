import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      editing: false,
    };
    this.onEditPost = this.onEditPost.bind(this);
    this.onEditing = this.onEditing.bind(this);
    this.onDeletePost = this.onDeletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeletePost() {
    this.props.deletePost(this.props.params.id);
  }
  onEditing(event) {
    this.props.updatePost(this.props.params.id, { content: event.target.value });
  }
  onEditPost() {
    this.setState({ editing: !this.state.editing });
  }

  editButton() {
    if (this.state.editing) {
      return <input type="button" value=" Done editing!" onClick={this.onEditPost} />;
    } else {
      return <input type="button" value="Edit post!" onClick={this.onEditPost} />;
    }
  }

  renderPost() {
    if (this.state.editing) {
      return <input value={this.props.currentPost.content} onChange={this.onEditing} />;
    } else {
      return <div>{this.props.currentPost.content}</div>;
    }
  }

  render() {
    if (!this.props.currentPost) {
      return <div>'loading...'</div>;
    }
    return (
      <div>
        <h1>{this.props.currentPost.title}</h1>
        {this.renderPost()}
        <div>
          {this.editButton()}
          <input type="button" value="Delete post!" onClick={this.onDeletePost} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentPost: state.posts.currentPost,
  }
);

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Show);
