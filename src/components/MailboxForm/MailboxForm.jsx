// import { useState } from 'react';
// import { useNavigate } from 'react-router';

// const initialState = {
//   boxOwner: '',
//   boxSize: '',
// };

// const MailboxForm = (props) => {
//   const [formData, setFormData] = useState(initialState);
//   const navigate = useNavigate();

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     props.addBox(mailboxes);
//     setMailboxes(initialState);
//     navigate('/mailboxes');
//   };

//   const handleChange = ({ target }) => {
//     setMailboxes({ ...mailboxes, [target.name]: target.value });
//   };

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <h2>New Mailbox</h2>

//         <label htmlFor="boxOwner">Boxholder:</label>
//         <input
//           type="text"
//           id="boxOwner"
//           name="boxOwner"
//           placeholder="Boxholder name"
//           value={mailboxes.boxOwner}
//           onChange={handleChange}
//         />

//         <label htmlFor="boxSize">BoxSize:</label>
//         <select
//           id="boxSize"
//           name="boxSize"
//           value={mailboxes.boxSize}
//           onChange={handleChange}
//         >
//           <option value="">Select Size</option>
//           <option value="Small">Small</option>
//           <option value="Medium">Medium</option>
//           <option value="Large">Large</option>
//         </select>

//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );
// };

// export default MailboxForm;



 import { useState } from 'react';
 import { useNavigate } from 'react-router';

const initialState = {
  boxOwner: '',
  boxSize: '',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(formData); 
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>New Mailbox</h1>

        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          placeholder="Boxholder name"
          value={formData.boxOwner}      
          onChange={handleChange}
          required
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}       
          onChange={handleChange}
          required
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
