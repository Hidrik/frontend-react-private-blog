import React from "react";
import {useParams} from "react-router-dom";
import posts from '../data/posts.json'

function Product() {
    const { id } = useParams();
    let title = ""
    let content = ""
    let date = ""


    for (let i=0; i < posts.length; i++) {
        if (posts[i].id === id) {
            title = posts[i].title
            date = posts[i].date
            content = posts[i].content
        }
    }

    return <>

        <h1>
            {title}
        </h1>
        <p>
            {content}
        </p>
        <p>
            {date}
        </p>
    </>
}

export default Product ;