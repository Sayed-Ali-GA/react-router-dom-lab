import { useParams } from 'react-router';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

 
  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

 
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

 return (
  <div>
    <h1>{selectedBox.boxOwner}</h1> 
    <h2>Details</h2>
    <p>Boxholder:  {selectedBox.boxOwner}</p>
    <p>Box Size:   {selectedBox.boxSize}</p>

    <h2>Letters</h2>
    {selectedLetters.length === 0 ? (
      <p>No letters for this mailbox.</p>
    ) : (
      <ul>
        {selectedLetters.map((letter, idx) => (
          <li key={idx}>
            <p>Dear {letter.recipient}</p>
            <p>{letter.message}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

};

export default MailboxDetails;
