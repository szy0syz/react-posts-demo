import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Create from './components/CreatePost';

function App() {
  const [user, setUser] = React.useState('');
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Create user={user} posts={posts} setPosts={setPosts} />
      {posts.map((post) => (
        <>
          {post.image && (
            <img
              alt=""
              style={{ height: 100, width: 200, objectFit: 'cover' }}
              src={URL.createObjectURL(post.image)}
            />
          )}
          <p>{post.content}</p>
          <div>{user}</div>
        </>
      ))}
    </div>
  );
}

export default App;
