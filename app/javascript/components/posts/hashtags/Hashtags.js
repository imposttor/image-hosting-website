import React from "react"
import PropTypes from "prop-types"
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
          <Show_posts posts={this.props.postsArray}/>
        </div>
      </div>
      </React.Fragment>
    );
  }
}
function Show_posts(props){
    return props.posts.map(item => {
        return (<div className="feedPost">
            <div className="postInfo">
                Author: {item.user_email}
            </div>
            <div className="postInfo">
            Hashtags: <Hashtags_to_links str = {item.hashtags}/>
            </div>
            <div>
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
Hashtags.propTypes = {
    postsArray: PropTypes.array,
    postsLink: PropTypes.string,
    signOutLink: PropTypes.string,
};

export default Hashtags
