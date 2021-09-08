import { DELETE_POST, FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("http://localhost:5000/posts")
    .then((res) => res.json())
    .then((posts) => {
      posts = posts.sort((a, b) => b.id - a.id);
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};

export const createPost = (postData) => (dispatch) => {
  fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};
export const deletePost = (postId) => (dispatch) => {
  fetch(`http://localhost:5000/posts/${postId}`, {
    method: "DELETE",
  })
    .then(() => {
      dispatch({
        type: DELETE_POST,
        payload: postId*1,
      });
    });
};
