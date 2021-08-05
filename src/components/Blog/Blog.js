import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css'

const Blog = () => {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPostData(data))
    }, [])

    return (
        <div className='blog'>
            {
                postData.map(post => <BlogCard key={post.id} post={post} />)
            }
        </div>
    );
};

export default Blog;