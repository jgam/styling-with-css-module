import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>agree in all terms!</CheckBox>
      <p>
        <b>check:</b>{check ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default App;
