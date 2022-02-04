import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import PostShow from '../container/post-show'
import PostList from '../container/post-list'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<PostList />} />
                <Route path="/post/:id" element={<PostShow />} />
                <Route path="/posts" element={<PostList />} />
            </Routes>
        </>
    )
}

export default AppRoutes;