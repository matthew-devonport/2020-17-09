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
        <aside className="sidenav"></aside>
        <main className="main"></main>
        <footer className="footer">
          <div class="footer__copyright">&copy; 2020 Matthew Devonport</div>
          <div class="footer__signature">PHEARNOC Digital</div>
        </footer>
      </div>

    </React.Fragment>
  );
}

export default App;
