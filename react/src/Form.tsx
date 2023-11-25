import { useState } from 'react';
import './App.css';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            type="password"
          />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
