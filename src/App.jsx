// src/App.jsx

import './App.css'
import './index.css'

import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import { Route , Routes } from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
// import LetterForm from './components/LetterForm/LetterForm'
const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const [letters, setLetters] = useState (
    [
      {
  mailboxId: 0,
  recipient: '',
  message: '',
}])

  const addBox = (newMailboxes) => {
  newMailboxes._id = mailboxes.length + 1;
  setMailboxes([...mailboxes, newMailboxes])
};

  const addLetter = (newletters) => {
  newletters._id = letters.length + 1;
  setLetters([...letters, newletters])
};

  return (
            <>
              <NavBar />
                <Routes>
                    <Route path="/" element={<main><h1>Post Office</h1></main>} />
                    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
                    <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
                    {/* <Route path="/new-LetterForm" element={<LetterForm/>} />  */}
                    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
                    <Route path="*" element={<h2>Page not found - 404</h2>} />
                    </Routes>
            
            </>
          )
};

export default App;
