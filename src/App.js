import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'


function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  // if (!localStorage.getItem('username')) return <RegisterForm />;


  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  }


  return (
    <>
      <ChatEngine
        height='100vh'
        projectID='df8e4cd1-a3a2-4795-933b-73ec32d9bcbe'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <div className='button-area'>
        <button className='logout' onClick={handleLogout} >Logout</button>
      </div>
    </>
  );
}

export default App;
