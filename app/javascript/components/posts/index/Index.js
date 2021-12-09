import React from "react"
import PropTypes from "prop-types"
import IndexPosts from "../functions/IndexPosts.js"
class Index extends React.Component {
  render () {
    return (
      <React.Fragment><div className="mainIndex">
        <div className="linksHeader">
            <div>
                <a href="/posts/profile">My profile</a>
            </div>
            <div>
                <a href={this.props.feedLink}>Feed</a>
            </div>
            <div>
                <a data-method="DELETE" href={this.props.signOutLink}>Sign out</a>
            </div>
        </div>
        <div className="feedHeader">
          MY POSTS
        </div>
        <div>
          <IndexPosts posts={this.props.postsArray}/>
        </div>
        <div className="indexPosts">
            <a href="posts/new">New post</a>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  postsArray: PropTypes.array,
  feedLink: PropTypes.string,
  signOutLink: PropTypes.string,
};
export default Index
