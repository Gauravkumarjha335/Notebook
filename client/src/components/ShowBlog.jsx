import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for making HTTP requests

function ShowBlog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/auth/showblog');
                setBlogData(response.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogData();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <div>
                {blogData.map(blog => (
                    <div key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowBlog;
