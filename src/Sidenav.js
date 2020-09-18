import React from 'react';

function Sidenav() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Sidenav;