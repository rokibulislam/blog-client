import React from 'react'
import { Routes, Route } from "react-router-dom";

import PostShow from '../container/post-show'
import PostList from '../container/post-list'
import Login  from '../container/auth/login'
import Register from '../container/auth/register'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<PostList />} />
                <Route path="/post/:id" element={<PostShow />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PostList to="/" />} />
            </Routes>
        </>
    )
}

export default AppRoutes;