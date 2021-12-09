import React from "react"
import PropTypes from "prop-types"
import ShowPosts from '../functions/ShowPost.js';

class Hashtags extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className="mainFeed">
        <div className="linksHeader">
            <div>
                <a href="/posts/profile">My profile</a>
            </div>
            <div>
                <a href={this.props.postsLink}>My images</a>
            </div>
            <div>
                <a data-method="DELETE" href={this.props.signOutLink}>Sign out</a>
            </div>
        </div>
        <div className="feedHeader">
          SORTED NEWS BY HASHTAG
        </div>
        <div className="feedPosts">
          <ShowPosts posts={this.props.postsArray}/>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

Hashtags.propTypes = {
    postsArray: PropTypes.array,
    postsLink: PropTypes.string,
    signOutLink: PropTypes.string,
};

export default Hashtags
