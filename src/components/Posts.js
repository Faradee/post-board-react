import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../actions/postActions";
import { FaTimes } from "react-icons/fa";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  onClick(e){
   this.props.deletePost(e.currentTarget.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <div className="post" key={post.id}>
        <span className="postDash">
          <span style={{ color: "#ff3232" }}>ID:#{post.id} </span>
          <FaTimes
            id={post.id}
            onClick={this.onClick}
            style={{ color: "red", cursor: "pointer", margin_left: 0 }}
          />
        </span>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return postItems.length ? (
      <div className="postsWrapper">
        <h1>Posts</h1>
        {postItems}
      </div>
    ) : (
      <h1>No posts</h1>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
