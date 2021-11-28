import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className="links-header">
          <div>
              <a href={this.props.feedLink}>Feed</a>
          </div>
          <div>
              <a data-method="DELETE" href={this.props.signOutLink}>Sign out</a>
          </div>
      </div>
      <div className="feed-header">
        MY POSTS
      </div>
      <div>
        <Index_posts posts={this.props.postsArray}/>
      </div>
      <div className="indexPosts">
          <a href="posts/new">New post</a>
      </div>
      </React.Fragment>
    );
  }
}
function Index_posts(props){
    return props.posts.map(item => {
        let showLink = "posts/" + item.id;
        let editLink = "posts/" + item.id + "/edit";
        let destroyLink ="posts/" + item.id;
        return (
            <div className="indexPosts">
                    <div>
                        <a href={showLink} >Show</a>
                    </div>
                    <div>
                        <a href={editLink}>Edit</a>
                    </div>
                    <div>
                        <a data-method = "delete" href={destroyLink}>Destroy</a>
                    </div>
            </div>);
    }
);
}
Index.propTypes = {
  postsArray: PropTypes.array,
  feedLink: PropTypes.string,
  signOutLink: PropTypes.string,
};
export default Index
