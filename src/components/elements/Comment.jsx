import React from 'react';
import '../../assets/styles/elements/comment.scss'

const Comment = (props) => {

console.log(props);
    return (
        <div className={`comment comment_${props.id}`}>
            <div className="comment-avatar">{props.text.slice(0, 2).toUpperCase()}</div>
            <div className="comment-content">
                <p>{props.text}</p>
                <span onClick={() => { props.removeComment(props.id) }}>🗙</span>
            </div>
        </div>
    )
}

export default Comment;