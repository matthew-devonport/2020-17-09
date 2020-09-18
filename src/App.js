import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <div className="grid-container">
        <header className="header">
          <div className="header__search">Search...</div>
          <div className="header__avatar">Icon</div>
        </header>
        <aside className="sidenav">
          <div className="mobileNavIcon">+</div>
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Item One</li>
            <li className="sidenav__list-item">Item Two</li>
            <li className="sidenav__list-item">Item Three</li>
            <li className="sidenav__list-item">Item Four</li>
            <li className="sidenav__list-item">Item Five</li>
          </ul>
        </aside>
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
