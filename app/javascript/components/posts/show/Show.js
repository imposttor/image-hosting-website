import React from "react"
import PropTypes from "prop-types"
import Share from "../../share/Share"
class Show extends React.Component {
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
        <div className="imagesBlock">
            <img className = "images" src={this.props.imageLink}/>
        </div>
        <div className="hashtags">
        <Hashtags_to_links str={this.props.hashtags}/>
        </div>
        <div className="backLink">
            <a href={this.props.backLink}>Back</a>
        </div>
        <div>
            <Share/>
        </div>
      </React.Fragment>
    );
  }
}
function Hashtags_to_links(props){
    let host = "/posts/hashtag/";
    let resSplit = props.str.split('#').slice(1)
    return resSplit.map(item => {
        return (<a href={host + item}>#{item}</a>)
    })
}

Show.propTypes = {
    hashtags: PropTypes.string,
    imageLink: PropTypes.string,
    feedLink: PropTypes.string,
    signOutLink: PropTypes.string,
    backLink: PropTypes.string
};
export default Show
