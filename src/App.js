import React from 'react';
import Sidenav from './Sidenav.jsx'

import './App.scss';


function App() {
  return (
    <React.Fragment>
      <div className="grid-container">
        <header className="header">
        <div className="headerTitle">Dashboard</div>
          <input className="headerSearch" placeholder="search"/>
          <i className="fa fa-search searchIcon"></i>
        </header>
          <Sidenav />
        <main className="main">
          <div className="main-header">
            <div className="main-header__heading">Hello User</div>
            <div className="main-header__updates">Recent Items</div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer__copyright">&copy; 2020 Matthew Devonport</div>
          <div className="footer__signature">PHEARNOC Digital</div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
