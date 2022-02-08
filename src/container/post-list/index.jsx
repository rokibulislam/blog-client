import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, addPost } from '../../store/slices/posts'
import Post from '../../components/posts/post'
import PostAdd from '../../components/posts/post-add'
import Pagination from "../../components/pagination";
import auth from '../../services/authService'
import { paginate } from '../../utils/paginate'
import './style.scss'

const PostList = () => {
    const dispatch = useDispatch();
    const posts =  useSelector( state => state.posts.items );
    const user =  useSelector( state => state.auth.user );
    const [pagination, setPagination] = useState({
        currentPage: 1,
        pageSize: 5
    });

    useEffect( () => {
        dispatch(fetchPosts());
    },[dispatch])

    const handleSubmit = ( title , content ) => {
        dispatch(addPost({ title, content, author: auth.getCurrentUser() }))
    }

    const handlePageChange = (e, page) => {
        e.preventDefault();
        setPagination({ ...pagination, currentPage: page });
    }

    const getPagedData = () => {
        const paginatedPosts = paginate(posts, pagination.currentPage, pagination.pageSize);
    
        return { totalCount: posts.length, paginatedPosts };
    }

    const { totalCount, paginatedPosts } = getPagedData();

    return (
    <>
        <div className="header-panel">
            <h1>Blog Posts</h1>
            <div>
            { user ? (
                <PostAdd handleSubmit={handleSubmit} /> 
            ) : 'To Create A post login' } 
            </div>
        </div>
         
        {
            posts.length > 0 ? (
            <>
                <div className="postlist">
                {
                    paginatedPosts.map( item => <Post item={item} key={item._id} /> )
                }
                </div>
                <Pagination
                    itemsCount={totalCount}
                    position="center"
                    pageSize={pagination.pageSize}
                    currentPage={pagination.currentPage}
                    onPageChange={handlePageChange}
                />
            </>
                
            ) :  (
                <div> <p> no posts found </p> </div>
            )
        }
    </>
    )
}

export default PostList