import React from 'react';
import './BlogCard.css'

const BlogCard = ({ post }) => {

    const { title, body } = post

    return (
        <div className="blogCard">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default BlogCard;