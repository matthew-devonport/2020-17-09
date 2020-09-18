import React from 'react';

import PopUpBox from './PopUpBox'

class Sidenav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popupIsShowing: false
    }
  }

  popupContent = ''

  togglePopup = () => {
    this.setState({
      popupIsShowing: !this.state.popupIsShowing
    })
  }

  setPopup = (content) => {
    this.togglePopup();
    this.popupContent = content
  }

  render() {
    return (
      <React.Fragment>
        <aside className="sidenav">
          <div onClick={() => this.setPopup(this.popupSideNav)} className="mobileNavIcon">+</div>
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Item One</li>
            <li className="sidenav__list-item">Item Two</li>
            <li className="sidenav__list-item">Item Three</li>
            <li className="sidenav__list-item">Item Four</li>
            <li className="sidenav__list-item">Item Five</li>
          </ul>
        </aside>
        {this.state.popupIsShowing && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}
        />}
      </React.Fragment>
    );
  }

  popupSideNav = (
    <aside className="sidenav">
      <ul className="sidenav__list">
        <li className="sidenav__list-item">Item One</li>
        <li className="sidenav__list-item">Item Two</li>
        <li className="sidenav__list-item">Item Three</li>
        <li className="sidenav__list-item">Item Four</li>
        <li className="sidenav__list-item">Item Five</li>
      </ul>
    </aside>
  )


}





export default Sidenav;