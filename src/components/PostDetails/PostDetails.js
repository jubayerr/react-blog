import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import './PostDetails.css'


const PostDetails = () => {
    const {id} = useParams()

    const [postData, setPostData] = useState({})

    const {title, body} = postData

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPostData(data))

    },[id])

    return (
        <div className="container">
            <div className="singlePost">
            <h1>{title}</h1>
            <p className="postText">{body}</p>
            <p className="postText">{body}</p>
            <p className="postText">{body}</p>
            <p className="postText">{body}</p>
            <p className="postText">{body}</p>
            </div>
        </div>
    );
};

export default PostDetails;