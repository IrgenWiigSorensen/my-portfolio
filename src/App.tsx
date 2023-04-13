import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/nav/nav.component';

function App() {

  return (
    <>
      <Nav/>
      <main>
        <div>
          <h6>Hi, my name is</h6>
        </div>
        <div>
          <h2>Irgen Wiig Sørensen.</h2>
        </div>
        <div>
          <h2>I build things</h2>
        </div>
      </main>
      <footer>
        <div>Created by Irgen Wiig Sørensen</div>
      </footer>
    </>
  );
}

export default App;
