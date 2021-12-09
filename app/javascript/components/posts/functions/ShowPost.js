import React from "react"
import PropTypes from "prop-types"
import HashtagsToLinks from './HashtagsToLinks';

export default function ShowPost(props){
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
