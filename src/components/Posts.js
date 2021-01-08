import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class Posts extends Component {
  async componentDidMount() {
    try {
      const response = await fetch(
        `https://wordpress56.loc/wp-json/wp/v2/posts/`
      );
      const responseJson = await response.json();

      const posts = responseJson;
      this.setState(posts);

      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <h3>Posts del site</h3>
          <div className="container">
            <ul>
              {this.posts.map((post) => (
                <Post post={post} />
              ))}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Posts;
