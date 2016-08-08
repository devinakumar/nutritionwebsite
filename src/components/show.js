import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';

class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      editing: false,
    };
    this.onEditPost = this.onEditPost.bind(this);
    this.onEditingTitle = this.onEditingTitle.bind(this);
    this.onEditingContent = this.onEditingContent.bind(this);
    this.onEditingTags = this.onEditingTags.bind(this);
    this.onDeletePost = this.onDeletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeletePost() {
    this.props.deletePost(this.props.params.id);
  }
  onEditingTitle(event) {
    this.props.updatePost(this.props.params.id, { title: event.target.value });
  }
  onEditingContent(event) {
    this.props.updatePost(this.props.params.id, { content: event.target.value });
  }
  onEditingTags(event) {
    this.props.updatePost(this.props.params.id, { tags: event.target.value });
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
      return (
        <div id="edit-form">
          <div>
            <h2>title:</h2>
            <input value={this.props.currentPost.title} onChange={this.onEditingTitle} />
          </div>
          <div>
            <h2>content:</h2>
            <Textarea minRows={4} value={this.props.currentPost.content} onChange={this.onEditingContent} />;
          </div>
          <div>
            <h2>tags:</h2>
            <input value={this.props.currentPost.tags} onChange={this.onEditingTags} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />
          <div>
            <h4>tags:</h4>
            {this.props.currentPost.tags}
          </div>
        </div>
      );
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
