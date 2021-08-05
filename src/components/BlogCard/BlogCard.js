import React from 'react';
import './BlogCard.css';
import { useHistory } from 'react-router';

const BlogCard = ({ post }) => {

    const { id, title, body } = post

    const history = useHistory()

   const handleTitle = (id) => {
       history.push(`/post/${id}`)
   }

    return (
        <div className="blogCard">
            <h2 className="blogTitle" onClick={()=>handleTitle(id)}>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default BlogCard;