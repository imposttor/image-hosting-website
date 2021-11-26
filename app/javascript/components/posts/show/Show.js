import React from "react"
import PropTypes from "prop-types"
class Show extends React.Component {
  render () {
    return (
        <React.Fragment>
        <div className="header">
            <div className="header1">
                <a href={this.props.feedLink}>Feed</a>
            </div>
            <div className="header2">
                <a data-method="DELETE" href={this.props.signOutLink}>Back</a>
            </div>
        </div>
        <div className="imagesBlock">
            <img className = "images" src={this.props.imageLink}/>
        </div>
      </React.Fragment>
    );
  }
}
Show.propTypes = {
    imageLink: PropTypes.string,
    feedLink: PropTypes.string,
    signOutLink: PropTypes.string,
    backLink: PropTypes.string
};
export default Show
