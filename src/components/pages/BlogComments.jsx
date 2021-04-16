import React from 'react';
import '../../assets/styles/pages/blogComments.scss';
import { commentActionCreator, addCommentCreator, removeCommentActionCreator } from '../../redux/blogReducer'
import Comment from '../elements/Comment';

const BlogComments = (props) => {
    let newCom = props.state.comment;
    const handleComment = (newComment) => {
        props.dispatch(commentActionCreator(newComment.target.value))
    }
    const addComment = () => {
        props.dispatch(addCommentCreator({ id: Date.now(), text: newCom }))
        props.dispatch(commentActionCreator(''))
    }
    const removeComment = (id) => {
        let filteredComments = props.state.comments.filter(comment => comment.id !== id)
        props.dispatch(removeCommentActionCreator(filteredComments))
    }
    return (
        <div className="comment-section">
            <div className="comment-container">
                <div className="comments">
                    {props.state.comments.map(comment => <Comment key={comment.id} text={comment.text} id={comment.id} removeComment={removeComment} />)}
                </div>
            </div>
            <div className="comment-block">
                <textarea
                    value={newCom}
                    onChange={handleComment}
                    placeholder="Write comment"></textarea>
                <button onClick={addComment}>Add comment</button>
            </div>
        </div>
    )
}
export default BlogComments;