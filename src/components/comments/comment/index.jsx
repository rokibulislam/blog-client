import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDate } from '../../../utils/helpers'
import ReplyForm from '../../replies/reply-form'
import { addReply, fetchComments } from '../../../store/slices/comments'
import './styles.scss'

import CommentList from '../comment-list'

const Comment = ( { postId, item, type }) => {
    const dispatch =  useDispatch()
    const user = useSelector( state => state.auth.user );
    const [ toggleReply, setToggleReply ] = useState(false)

    const replyOnComment = (parent, content) => {
        dispatch(addReply({
            parent,
            content,
            post: postId
        }))
        
        setToggleReply(false);
    }

    const replyContent = () => {
        if( user ) {   
            return !toggleReply ? ( <button type="button" onClick={(e) => {e.preventDefault(); setToggleReply(true)}}  className="button button-link"> Reply </button>) 
            : ( <ReplyForm parent={item._id} onReply={replyOnComment} onCancelReply={setToggleReply}/> )
        }
    }

    return (
        <div className="comment-container" key={item._id}>
            <div className={'comment' + (item.type !== null ? ' reply' : '')}>
                <div className="media-object">
                    <div className="avatar">
                        
                    </div>
                    <div className="media-content">
                        <p className="name">{item.author.username}</p>
                        <p className="date"> { getDate(item.createdAt) } </p>
                    </div>
                </div>
                <div className="comment-content">{item.content} </div>
                {  replyContent() }
            </div>
            { item.children ? (
                <>      
                    <CommentList items={item.children} /> 
                </>
                ) : '' }
        </div>
    )
}

export default Comment