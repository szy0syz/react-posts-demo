import React from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = React.useState('');

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return <div>App</div>;
}

export default App;
