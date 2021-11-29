import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export interface Ex {
  name: string,
  age: number
}

export interface Person {
  hobby: string,
  value: number
}

const App: React.FC<Ex | Person | any> = ({ name, age }) => {

  const [state, setstate] = useState<Ex>({ name: "John", age: 30 });
  const [person, setPerson] = useState<Person>({ hobby: "fishing", value: 30 });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state.name} {state.age}
          {person.hobby} {person.value}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
