import React from 'react';

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
      </form>
    </div>
  );
}

export default Login;
