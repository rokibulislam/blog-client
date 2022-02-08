import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReplyForm from '../../replies/reply-form'
import { addReply, fetchComments } from '../../../store/slices/comments'
import './styles.scss'

const Comment = ( { postId, item }) => {
    const dispatch =  useDispatch()
    const user = useSelector( state => state.auth.user );
    const [ toggleReply, setToggleReply ] = useState(false)

    const replyOnComment = (parent, content) => {
        console.log('reply on comment');
        
        dispatch(addReply({
            parent,
            content,
            post: postId
        }))

        dispatch(fetchComments())
        
        setToggleReply(true);
    }

    const replyContent = ( ) => {
        if( user && item.replay == null ) {   
            return !toggleReply ? ( <button type="button" onClick={replyOnComment} className="button button-link"> Reply </button>) 
            : ( <ReplyForm parent={item._id} onReply={replyOnComment} onCancelReply={setToggleReply}/> )
        }
    }

    return (
        <div className="comment-container" key={item._id}>
           <p className="comment-content"> { item.content } </p>
           { replyContent( ) }
           { item?.replay ? <Comment item={item.replay} key={item._id} /> : '' }
        </div>
    )
}

export default Comment