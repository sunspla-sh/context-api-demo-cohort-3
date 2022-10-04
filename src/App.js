import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';

import { useState } from 'react';

function App() {

  const [message, setMessage] = useState('HEY FROM APP');

  return (
    <div className="App">
      <h1>Hey from App</h1>
      <CompA message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;
