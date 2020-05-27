import React from 'react';

function Post({ user, image, content }) {
  return (
    <>
      {image && (
        <img
          alt=""
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </>
  );
}

export default Post;
