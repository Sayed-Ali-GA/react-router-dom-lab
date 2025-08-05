import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  mailboxId: '',
  recipient: '',
  message: '',
};

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addLetter({
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient,
      message: formData.message,
    });
    setFormData(initialState);
     navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
         <option value="">Select mailbox</option>
          {mailboxes.map((mailbox) => (
    <option key={mailbox._id} value={mailbox._id}>
          {mailbox.boxOwner}
    </option>
))}

    </select>

        <label htmlFor="recipient">Recipient Name:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;
