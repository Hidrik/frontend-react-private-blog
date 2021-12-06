import React from "react";
import {Link} from 'react-router-dom';


function BlogPosts({postCount, posts}) {

    return <>
        <p>Het aantal blogposts is {postCount}</p>
        <ul>
            {posts.map(post => {
                    return <>
                        <li key={post.id}>
                            <Link to={`/product/${post.id}`} classname='blog-link'> {post.title}</Link>
                        </li>
                    </>
                }
            )}
        </ul>
    </>
}

export default BlogPosts;