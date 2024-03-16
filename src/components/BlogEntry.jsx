import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { blogPosts } from '../data.js';

const BlogEntry = () => {
    const { id } = useParams();
    const blogPost = blogPosts.find((blogPost) => String(blogPost.id) === id);

    return (
        <div>
            {blogPosts.map((blogPost) => (
                <Link key={blogPost.id} to={`/blog/${blogPost.id}`}>
                    <h3>{blogPost.title}</h3>
                </Link>
            ))}
            {blogPost ? (
                <div>
                    <h2>{blogPost.title}</h2>
                    <p>{blogPost.content}</p>
                    <p>{blogPost.author}</p>
                    <p>{blogPost.date}</p>
                </div>
            ) : ''}
        </div>
    );
}

export default BlogEntry;