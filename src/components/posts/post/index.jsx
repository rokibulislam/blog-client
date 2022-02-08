import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss";

const Post = ( { item }) => {
    return (
        <div className="post-container">
            <h2 className="post-title"> <Link to={`/post/${item._id}`}>  { item.title } </Link> </h2>
            <p  className="post-content"> { item.content }</p>
            <p className="post-date"> {new Date(item.date).toUTCString()} </p>
        </div>
    )
}

export default Post