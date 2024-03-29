import React from "react";
import PropTypes from "prop-types";
import Share from "../../share/Share";
import HashtagsToLinks from '../functions/HashtagsToLinks';

class Show extends React.Component {
  render () {
    return (
        <React.Fragment>
        <div className = "mainShow">
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
          <div className="imagesBlock">
              <img className = "images" src={this.props.imageLink}/>
          </div>
          <div className="hashtags">
          <HashtagsToLinks str={this.props.hashtags}/>
          </div>
          <div>
              Количество просмотров: {this.props.views}
          </div>
          <div className="backLink">
              <a href={this.props.backLink}>Back</a>
          </div>
          <div>
              <Share/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Show.propTypes = {
    hashtags: PropTypes.string,
    imageLink: PropTypes.string,
    feedLink: PropTypes.string,
    signOutLink: PropTypes.string,
    backLink: PropTypes.string
};
export default Show
