import React from 'react'
import Comment from '../comment'
import { useParams, Link } from 'react-router-dom'

const CommentList = ( { postId, items }) => {
    const { id } = useParams()
    return (
        <>
            {
                items.map( item => <Comment postId={id} item={item} key={item._id} /> ) 
            }   
        </>
    )
}

export default CommentList;