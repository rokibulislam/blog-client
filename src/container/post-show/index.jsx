import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSinglePost } from '../../store/slices/posts'
import PostSingle from '../../components/posts/post-single'

const PostShow = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const post = useSelector( state => state.posts.post )

    useEffect( () => {
        dispatch(fetchSinglePost(id));
    }, [dispatch, id]);

    return (
        <>
        <PostSingle post={post}/>
        </>
    )
}

export default PostShow