import { useContext } from 'react';

import { MessageContext } from './MessageProvider';

function CompC(props){

  const { message2, setMessage2 } = useContext(MessageContext);

  return (
    <div>
      <h4>Hey from CompC</h4>
      <input
        value={props.message}
        onChange={event => props.setMessage(event.target.value)}
      />
      <input
        value={message2}
        onChange={event => setMessage2(event.target.value)}
      />
    </div>
  );
}

export default CompC;