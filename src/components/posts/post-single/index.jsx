import React from 'react'
import './styles.scss'

const PostSingle = ({ post }) => {
    return (
        <>
        <div className="single-post">
            <h2 className="post-title"> { post.title } </h2>
            <p className="post-content"> { post.content }</p>
        </div>
        </>
    )
}

export default PostSingle