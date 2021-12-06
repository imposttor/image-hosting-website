import React from "react"
import PropTypes from "prop-types"
class Profile extends React.Component {
  render () {
    return (
      <React.Fragment>
          <div className="linksHeader">
              <div>
                  <a href="/">Feed</a>
              </div>
              <div>
                  <a href="/posts">My images</a>
              </div>
              <div>
                  <a data-method="DELETE" href="/users/sign_out">Sign out</a>
              </div>
          </div>
          <div className="mainProfile">
          <div>
            User ID: {this.props.id}
          </div>
          <div>
            User email: {this.props.email}
          </div>
          <div>
            User phone: {this.props.phone}
          </div>
          <div>
            <a href="/users/edit">Edit user</a>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Profile
