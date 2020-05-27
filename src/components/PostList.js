import React from 'react';
import Post from '../components/Post';

function PostList({ posts }) {
  return posts.map((post, idx) => <Post key={idx} {...post} />);
}

export default PostList;
