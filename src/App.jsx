// src/App.jsx
import './App.css'
import './index.css'

import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import { Route , Routes } from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import LetterForm from './components/LetterForm/LetterForm';

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const [letters, setLetters] = useState ([]) 

   const addBox = (formData) => {
    const newBox = { ...formData, _id: mailboxes.length + 1 };
    setMailboxes([...mailboxes, newBox]);
  };

  const addLetter = (formData) => {
    setLetters([...letters, formData]);
  };

  return (
            <>
              <NavBar />
                <Routes>
                    <Route path="/" element={<main><h1>Post Office</h1></main>} />
                    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
                    <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
                    <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
                     <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
                    <Route path="*" element={<h2>Page not found - 404</h2>} />
                    </Routes>
            
            </>
          )
};

export default App;
