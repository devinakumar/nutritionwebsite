import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_FOODS: 'FETCH_FOODS',
  FETCH_MEALS: 'FETCH_MEALS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://devinacs52hw5p2.herokuapp.com/api';
const ROOT_URL = 'https://watsonnutrition.herokuapp.com/api';

const API_KEY = '?key=devina_k';

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch(error => {
// hit an error do something else!
    });
  };
}

export function fetchFoods() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/food`).then(response => {
      dispatch({ type: 'FETCH_FOODS', payload: response.data });
    }).catch(error => {
// hit an error do something else!
    });
  };
}

export function fetchMeals() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/meal`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'FETCH_MEALS', payload: response.data });
    })
    .catch(error => {
      console.log('we hur');
    });
  };
}

export function createPost(post) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'DELETE_POST', payload: response.data });
      browserHistory.push('/');
// do something with response.data  (some json)
    }).catch(error => {
// hit an error do something else!
    });
  };
}
export function signinUser(user) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, user).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser(user) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, user).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
