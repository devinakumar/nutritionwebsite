import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=devina_k';

export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });

// do something with response.data  (some json)
    }).catch(error => {
// hit an error do something else!
    });
  };
}

export function createPost(post) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then(response => {
      dispatch({ type: 'CREATE_POST', payload: response.data });
      browserHistory.push('/');
// do something with response.data  (some json)
    }).catch(error => {
// hit an error do something else!
    });
  };
}

export function updatePost(id, post) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, post).then(response => {
      dispatch({ type: 'UPDATE_POST', payload: response.data });
// do something with response.data  (some json)
    }).catch(error => {
// hit an error do something else!
    });
  };
}

export function fetchPost(id) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
// do something with response.data  (some json)
    }).catch(error => {
// hit an error do something else!
    });
  };
}

export function deletePost(id) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`).then(response => {
      dispatch({ type: 'DELETE_POST', payload: response.data });
      browserHistory.push('/');
// do something with response.data  (some json)
    }).catch(error => {
// hit an error do something else!
    });
  };
}
