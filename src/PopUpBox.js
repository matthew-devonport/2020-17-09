import React from "react"

class PopUpBox extends React.Component {
  render() {
   /* adding properties to show content/use functions from Sidenav.jsx component */
    let { togglePopup, content} = this.props
    return (
      <React.Fragment>
        <div id='popup-overlay-sidenav'>
            <div id='popup-content'>
            {/* displaying content on Sidenav.jsx component*/}
            {content}
            </div>
             {/* adding on click function to close pop up*/}
            <a id='popup-close-sidenav' onClick={togglePopup}>
              &times;
            </a>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpBox