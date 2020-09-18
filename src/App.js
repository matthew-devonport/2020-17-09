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
            <div className="main-headerHeading">Hello User</div>
            <div className="main-headerUpdates">Recent Items</div>
          </div>
        </main>
        <footer className="footer">
          <div className="footerCopyright">&copy; 2020 Matthew Devonport</div>
          <div className="footerSignature">Sample Text</div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
