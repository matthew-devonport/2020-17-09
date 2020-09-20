import React from 'react';

import PopUpBox from './PopUpBox'

class Sidenav extends React.Component {

// Page loads without popup showing.
  constructor(props) {
    super(props)
    this.state = {
      popupIsShowing: false
    }
  }

// Declaring the popup content as a string to insert into 'popup-content' div in the popUpBox.js component.
  popupContent = ''

// Function that changes the state of popupIsShowing once triggered.
  togglePopup = () => {
    this.setState({
      popupIsShowing: !this.state.popupIsShowing
    })
  }

// Function that displays declared content once togglePopup has been triggered.
  setPopup = (content) => {
    this.togglePopup();
    this.popupContent = content
  }

  render() {
    return (
      <React.Fragment>
        <aside className="sidenav">
        {/* onclick function that gives the correct content to show on popup. */}
          <div onClick={() => this.setPopup(this.popupSideNav)} className="mobileNavIcon">+</div>
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Item One</li>
            <li className="sidenav__list-item">Item Two</li>
            <li className="sidenav__list-item">Item Three</li>
            <li className="sidenav__list-item">Item Four</li>
            <li className="sidenav__list-item">Item Five</li>
          </ul>
        </aside>
        {/* adding state and popUpBox.js component within Sidenav component. */}
        {this.state.popupIsShowing && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}
        />}
      </React.Fragment>
    );
  }

// Content which is to be shown on popup.
  popupSideNav = (
    <aside className="sidenavPopup">
      <ul className="sidenav__listPopup">
        <li className="sidenav__list-itemPopup">Item One</li>
        <li className="sidenav__list-itemPopup">Item Two</li>
        <li className="sidenav__list-itemPopup">Item Three</li>
        <li className="sidenav__list-itemPopup">Item Four</li>
        <li className="sidenav__list-itemPopup">Item Five</li>
      </ul>
    </aside>
  )
}


export default Sidenav;