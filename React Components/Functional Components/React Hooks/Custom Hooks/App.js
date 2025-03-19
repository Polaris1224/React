import React from 'react';
import LoginPage from './LoginPage';
import { useState } from 'react';
import Reset from './Reset';

function App() {
  const [form, setForm] = useState("login");
  
  return (
    <div className='App'>
      {form === 'login' ? <LoginPage /> : <Reset />}
      <button onClick={() => setForm(form === 'login' ? 'reset' : 'login')}>
        {form === 'login' ? 'Reset Password' : 'Login'}
      </button>
    </div>
  );
}

export default App;
