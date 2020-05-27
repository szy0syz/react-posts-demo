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
