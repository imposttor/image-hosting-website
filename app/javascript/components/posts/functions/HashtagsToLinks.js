import React from "react"
import PropTypes from "prop-types"

export default function HashtagsToLinks(props) {
  let host = "/posts/hashtag/";
  let resSplit = props.str.split('#').slice(1)
  return resSplit.map((item, index) => {
      return (<a key={index} href={host + item}>#{item}</a>)
  })
}
