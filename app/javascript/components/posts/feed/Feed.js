import React from "react"
import PropTypes from "prop-types"
class Feed extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className="links-header">
          <div>
              <a href={this.props.postsLink}>My images</a>
          </div>
          <div>
              <a data-method="DELETE" href={this.props.signOutLink}>Sign out</a>
          </div>
      </div>
      <div className="feed-header">
        NEWS FEED
      </div>
      <div className="feed-posts">
        <Show_posts posts={this.props.postsArray}/>
      </div>
      </React.Fragment>
    );
  }
}

function Show_posts(props){
    return props.posts.map(item => {
        return (<div>
            <div className="post_in_feed">
                Author: {item.user_email}
            </div>
                <div>
                Hashtags: <Hashtags_to_links str = {item.hashtags}/>
                </div>
        <div className="post_in_feed">
            <img className="images" src = {item.image}/>
        </div>
    </div>);
    }
);
}
function Hashtags_to_links(props){
    let host = "/posts/hashtag/";
    let resSplit = props.str.split('#').slice(1)
    return resSplit.map(item => {
        return (<a href={host + item}>#{item}</a>)
    })
}
Feed.propTypes = {
    postsArray: PropTypes.array,
    postsLink: PropTypes.string,
    signOutLink: PropTypes.string,
};
export default Feed
