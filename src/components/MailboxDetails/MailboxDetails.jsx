import { useParams } from "react-router";

const MailboxDetails = (props) => {

  console.log(props);

    const params = useParams()
    const selectedBox = props.mailboxes.find ( m => m._id === parseInt(params.mailboxId));
 
return(
        <>
          
          <h2>Mailbox Details</h2>
          
           <dl>
        <dt>Boxholder:</dt>
        <dd>{selectedBox.Boxholder}</dd>
        <dt>Box Size:</dt>
        <dd>{selectedBox.BoxSize}</dd>
      </dl>
        </>
    );
};
export default MailboxDetails