import { createContext, useState } from "react";


const MessageContext = createContext();

const MessageProvider = ({ children }) => {

  const [message2, setMessage2] = useState('message2');

  return (
    <MessageContext.Provider value={{ message2, setMessage2 }}>
      {children}
    </MessageContext.Provider>
  );

};

export { MessageContext, MessageProvider };