import React from "react";
import {useParams} from "react-router-dom";
import posts from '../data/posts.json'

class data {
    constructor(post) {
        this.id = post.id;
        this.title = post.title;
        this.date = post.date
        this.content = post.content;
    }
}

function Product() {
    const { id } = useParams();
    let blogpostContent


    for (let i=0; i < posts.length; i++) {
        if (posts[i].id === id) {
            blogpostContent = new data(posts[i])
        }
    }


    return <>
        <h1>
            {blogpostContent.title}
        </h1>
        <p>
            {blogpostContent.date}
        </p>
        <p>
            {blogpostContent.content}
        </p>
    </>
}

export default Product ;