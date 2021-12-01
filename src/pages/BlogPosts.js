import React from "react";
import {Link} from 'react-router-dom';


function BlogPosts({postCount, posts}) {

    return <>
        <p>Het aantal blogposts is {postCount}</p>
        {posts.map(post => {
                return <>
                    <Link to={`/product/${post.id}`} classname='blog-link'> {post.title}</Link>
                    <br/>
                </>
            }
        )}
    </>
}

export default BlogPosts;