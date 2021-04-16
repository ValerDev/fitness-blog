import React from 'react';
import '../../assets/styles/pages/blogComments.scss';
import { commentActionCreator, addCommentCreator } from '../../redux/blogReducer'

const BlogComments = (props) => {

    let newComm = props.comment;

    const handleComment = (newComment) => {
        props.dispatch(commentActionCreator(newComment.target.value))
        console.log(newComment);
    }
    const addComment = () => {
        props.dispatch(addCommentCreator())
    }
    return (
        <div className="comment-section">
            <div className="comment-container">
                <div className="comment-avatar"></div>
                <div className="comment">
                    {/* comment  */}
                </div>
            </div>
            <div className="comment-block">
                <textarea
                    value={newComm}
                    onChange={handleComment}
                    placeholder = "Write comment"></textarea>
                <button onClick={addComment}>
                    Add comment
                        </button>
            </div>
        </div>
    )
}
export default BlogComments;