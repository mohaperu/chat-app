import { useState } from 'react';
import axios from 'axios';

const projectID = 'df8e4cd1-a3a2-4795-933b-73ec32d9bcbe';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': secret };

    try {
      await axios.post('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', secret);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={secret} onChange={(e) => setSecret(e.target.value)} className="input" placeholder="Password" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required />
          <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className="input" placeholder="First Name" required />
          <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="input" placeholder="Last Name" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;