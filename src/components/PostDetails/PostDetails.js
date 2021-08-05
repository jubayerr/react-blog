import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'


const PostDetails = () => {
    const {id} = useParams()

    const [postData, setPostData] = useState({})

    // console.log(postData);

    const {title, body} = postData

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(data => setPostData(data))

    },[id])

    return (
        <div className="container">
            <div className="singlePost">
            <h1>{title}</h1>
            <p>{body}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum adipisci provident fugiat quam maxime consequuntur nihil perferendis corporis id nesciunt ipsam dolore aut aliquam similique ad, ipsum ullam, odit quas, facere illum? Reiciendis eligendi voluptatem facere rerum, sequi blanditiis ducimus atque fuga at doloribus accusantium a obcaecati excepturi saepe.</p>
            </div>
        </div>
    );
};

export default PostDetails;