import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <div className="grid-container">
        <header className="header">
          <div class="header__search">Search...</div>
          <div class="header__avatar">Icon</div>
        </header>
        <aside className="sidenav">
          <ul class="sidenav__list">
            <li class="sidenav__list-item">Item One</li>
            <li class="sidenav__list-item">Item Two</li>
            <li class="sidenav__list-item">Item Three</li>
            <li class="sidenav__list-item">Item Four</li>
            <li class="sidenav__list-item">Item Five</li>
          </ul>
        </aside>
        <main className="main">
          <div class="main-header">
            <div class="main-header__heading">Hello User</div>
            <div class="main-header__updates">Recent Items</div>
          </div>
        </main>
        <footer className="footer">
          <div class="footer__copyright">&copy; 2020 Matthew Devonport</div>
          <div class="footer__signature">PHEARNOC Digital</div>
        </footer>
      </div>

    </React.Fragment>
  );
}

export default App;
