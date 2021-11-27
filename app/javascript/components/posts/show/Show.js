import React from "react"
import PropTypes from "prop-types"
class Show extends React.Component {
  render () {
    return (
        <React.Fragment>
        <div className="header">
            <div className="header1">
                <a href={this.props.feedLink}>Feed</a>
            </div>
            <div className="header2">
                <a data-method="DELETE" href={this.props.signOutLink}>Back</a>
            </div>
        </div>
        <div className="imagesBlock">
            <img className = "images" src={this.props.imageLink}/>
        </div>
        <div className="hashtags">
        <Hashtags_to_links str={this.props.hashtags}/>
        </div>
      </React.Fragment>
    );
  }
}
function Hashtags_to_links(props){
    let regular_hashtag = /#[0-9A-Za-zА-Яа-яё]+/g;
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
