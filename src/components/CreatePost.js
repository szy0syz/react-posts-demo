import React from 'react';

function CreatePost({ user, handleAddPost }) {
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const post = { content, image, user };
    handleAddPost(post);
    setContent('');
    imageInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(ev) => setContent(ev.target.value)}
          type="text"
          placeholder="Add Post Content"
          value={content}
        />
        <input
          ref={imageInputRef}
          onChange={(ev) => setImage(ev.target.files[0])}
          type="file"
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
