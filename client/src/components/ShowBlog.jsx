import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for making HTTP requests
import { Row, Col, Container } from 'reactstrap'
import {

    EditOutlined, DeleteOutlined
} from '@ant-design/icons';


function ShowBlog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        var fetchBlogData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/auth/showblog');
                setBlogData(response.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogData();
    }, []);



    const handleDeleteBlog = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/auth/deleteblog`).then(() => {
                if (response.ok) {
                    alert("blog deleted Sussefully")
                }
            })


        } catch (error) {
            console.error('Error deleting blog:', error);
           
        }
    };

    return (
        <div>

            <Container>
                <Row style={{ display: 'flex', gap: '10px' }}>
                    {/* Check if blogData is an array before calling map */}
                    {Array.isArray(blogData) && blogData.map((blog) => (
                        <Col md={2} style={{ boxSizing: 'border-box', border: '1px solid black', padding: '10px' }} key={blog._id}>

                            <h3>{blog.title}            <DeleteOutlined style={{ float: 'right', width: '20px' }} onClick={handleDeleteBlog} /><EditOutlined style={{ float: 'right', width: '20px' }} /></h3>
                            <p>{blog.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
}

export default ShowBlog;
