import React from "react"
import PropTypes from "prop-types"
class Feed extends React.Component {
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
          NEWS FEED
        </div>
        <div className="feedPosts">
          <Show_posts posts={this.props.postsArray}/>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

function Show_posts(props){
    return props.posts.map((item, index) => {
        return (<div key={index} className="feedPost">
            <div className="postInfo">
                Author: {item.user_email}
            </div>
                <div className="postInfo">
                Hashtags: <HashtagsToLinks str = {item.hashtags}/>
                </div>
        <div>
            <img className="images" src = {item.image}/>
        </div>
        <a  className="postInfo" href={"/posts/" + item.id}>Show post</a>
    </div>);
    }
);
}
function HashtagsToLinks(props){
    let host = "/posts/hashtag/";
    let resSplit = props.str.split('#').slice(1)
    return resSplit.map((item, index) => {
        return (<a key={index} href={host + item}>#{item}</a>)
    })
}
Feed.propTypes = {
    postsArray: PropTypes.array,
    postsLink: PropTypes.string,
    signOutLink: PropTypes.string,
};
export default Feed
