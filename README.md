# React-Instagram-Clone

## Ch1

- mini login system

```js
// App.js
import React from 'react';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  const [user, setUser] = React.useState('');

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return <div>App</div>;
}

export default App;

// ----------------------
// Login.js

function Login({ setUser }) {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="Input username"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        {username}
      </form>
    </div>
  );
}

// ----------------------
// Header.js
function Header({ user, setUser }) {
  return (
    <div>
      Welcome, {user}!<button onClick={() => setUser('')}>Logout</button>
    </div>
  );
}
```

- 图片还可以这样玩

```js
function CreatePost({ user }) {
  const [content, setContent] = React.useState(null);
  const [image, setImage] = React.useState(null);

  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input
          onChange={(ev) => setContent(ev.target.value)}
          type="text"
          placeholder="Add Post Content"
        />
        <input onChange={(ev) => setImage(ev.target.files[0])} type="file" />
        <button type="submit">Submit Post</button>
      </form>
      <p>{content}</p>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt="img1"
        />
      )}
    </div>
  );
}
```

- 草木皆兵的感觉

```js
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
```

> 完成 mini post system
