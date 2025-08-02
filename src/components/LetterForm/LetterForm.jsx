// // src/components/PokemonForm/PokemonForm.jsx

// import { useState } from 'react';
// import { useNavigate } from 'react-router';

// const initialState = {
//   Boxholder: 0,
//   BoxSize: 0,
// };

// const MailboxForm = (props) => {
//   const [mailboxes, setMailboxes] = useState(initialState);
//   const navigate = useNavigate()

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     props.addBox(mailboxes);
//     setMailboxes(initialState);
//      navigate('/mailboxes');
//   };

//   const handleChange = ({ target }) => {
//     setMailboxes({ ...mailboxes, [target.name]: target.value });
//   };

//   return (
//     <main>
//       <h2>New Mailbox</h2>
//       <form onSubmit={handleSubmit}>

//         <label htmlFor="Boxholder">Boxholder:</label>
//         <input
//           type="text"
//           id="Boxholder"
//           name="Boxholder"
//           value={mailboxes.Boxholder}
//           onChange={handleChange}
//         />

//         <label htmlFor="BoxSize">BoxSize:</label>
//         <input
//           type="number"
//           id="BoxSize"
//           name="BoxSize"
//           value={mailboxes.BoxSize}
//           onChange={handleChange}
//         />
        
//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );
// };

// export default MailboxForm;