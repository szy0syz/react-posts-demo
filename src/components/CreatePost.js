import React from 'react';

function CreatePost({ user, posts, setPosts }) {
  const [content, setContent] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const post = { content, image, user };
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(ev) => setContent(ev.target.value)}
          type="text"
          placeholder="Add Post Content"
        />
        <input onChange={(ev) => setImage(ev.target.files[0])} type="file" />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
