import React from "react"
import exclamation from "../assets/exclamation.png"

export default class GalaxySNote7 extends React.Component {


  exclaim = () => (<img className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {(this.props.environment === "inhospitable") ? this.exclaim() : null}
      </div>
    )
  }
}
