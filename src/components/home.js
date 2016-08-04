import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';

class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  listView() {
    return this.props.posts.map((post) => {
      return <li><a href={`http://localhost:8080/posts/${post.id}`}>{post.title}</a></li>;
    });
  }
  render() {
    return (
      <div>
        <h1>Devinas Blog</h1>
          {this.listView()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    posts: state.posts.all,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Home);
