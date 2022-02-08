import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchSinglePost } from '../../store/slices/posts'
import { fetchComments, addComment } from '../../store/slices/comments'
import PostSingle from '../../components/posts/post-single'
import CommentForm from '../../components/comments/comment-form'
import Comment from '../../components/comments/comment'
import CommentList from '../../components/comments/comment-list'

const PostShow = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const post = useSelector( state => state.posts.post )
    const user = useSelector( state => state.auth.user )
    const comments = useSelector( state => state.comments.items )

    useEffect( () => {
        dispatch(fetchSinglePost(id));
        dispatch(fetchComments(id));
    }, []);

    const commentOnPost = (content) => {
       
        dispatch(addComment({
            content,
            post: id,
            author: user
        }))
    }
   
    return (
        <>
        <PostSingle post={post}/>
        { user ? (
                <CommentForm onSubmit={commentOnPost}/> 
            ) : (
                <>
                    <p> please login to comment <Link to='/login' className="button button-primary"> Login </Link> </p>
                    
                </> 
            )} 

        <div className="comment-section">
            {
                comments.length > 0 ? ( <CommentList postId={id} items={comments} /> ) : 
                    ( <p> no comments found </p> )
            }   
        </div>
        </>
    )
}

export default PostShow