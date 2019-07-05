import React from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import { Wave } from 'react-animated-text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Digis-logo" alt="Digis" width="500"/>
        <Wave0 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const exampleStyle = {
    display: 'inline-block',
    marginBottom: '1em',
    padding: '2em 1em 1em 1em',
    width: '80%',
    fontSize: '2rem',
}

export const Wave0 = () => (
    <div style={exampleStyle}>
        <Wave text="DIGIS internship React program includes:" effect="stretch" effectChange={1.3} />
        <div className="loader-text">Work in the consolidated and friendly team</div>
    </div>
)

let loader_text = [
    'Development and support of graphical interfaces',
    'Team collaboration on real-life projects',
    'Deep study of the chosen stack of technologies under the guidance of an experienced mentor',
    'We, the DIGIS Company, know how difficult it is for developers without commercial experience to find their first job.',
];

function printInterval(loader_text) {
    let i = 0;
    let timerId = setInterval(function() {
        $('.loader-text').html(loader_text[i]);

        // if we want to stop it, but i like infinity

        /*if (i == loader_text.length) {
            clearInterval(timerId);
            $('.loader-text').text('');
        }*/

        if (i === loader_text.length) {
            i = -1;
        }
        i++;
    }, 3000);
}

printInterval(loader_text);

export default App;
