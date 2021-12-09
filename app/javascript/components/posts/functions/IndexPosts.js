import React from "react"
import PropTypes from "prop-types"
export default function IndexPosts(props){
    return props.posts.map((item, index) => {
        let showLink = "posts/" + item.id;
        let editLink = "posts/" + item.id + "/edit";
        let destroyLink ="posts/" + item.id;
        return (
            <div key={index} className="indexPosts">
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
