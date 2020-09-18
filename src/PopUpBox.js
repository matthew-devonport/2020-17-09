import React from "react"

class PopUpBox extends React.Component {
  render() {
    let { togglePopup, content} = this.props
    return (
      <React.Fragment>
        <div id='popup-overlay-sidenav'>
            <div id='popup-content'>
            {content}
            </div>
            <a id='popup-close-sidenav' onClick={togglePopup}>
              &times;
            </a>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpBox