import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        Show Link: {this.props.showLink}
        Edit Link: {this.props.editLink}
        Destroy Link: {this.props.destroyLink}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  showLink: PropTypes.node,
  editLink: PropTypes.node,
  destroyLink: PropTypes.string
};
export default Index
