import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Using Axios for making HTTP requests
import { Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function ShowBlog() {
    const [blogData, setBlogData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('/api/auth/showblog');
                setBlogData(response.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogData();
    }, []);

    const handleDeleteBlog = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this blog?');
            if (confirmed) {
                const response = await axios.delete(`http://localhost:8000/api/auth/deleteblog/${id}`);
                if (response.status === 200) {
                    alert("Blog deleted successfully");
                    // Refresh blog data after deletion
                    const updatedBlogData = blogData.filter(blog => blog._id !== id);
                    setBlogData(updatedBlogData);
                }
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert("An error occurred while deleting the blog.");
        }
    };

    const handleUpdateBlog = (blog) => {
        setSelectedBlog(blog);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedBlog(null);
    };

    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/api/auth/updateblog/${selectedBlog._id}`, {
                title: selectedBlog.title,
                description: selectedBlog.description
                // Add other fields as needed
            });
    
            if (response.status === 200) {
                alert("Blog updated successfully");
                // Update the blogData state with the modified blog
                const updatedBlogData = blogData.map(blog => {
                    if (blog._id === selectedBlog._id) {
                        return { ...blog, title: selectedBlog.title, description: selectedBlog.description };
                    } else {
                        return blog;
                    }
                });
                setBlogData(updatedBlogData);
                handleCloseModal();
            } else {
                alert("Failed to update blog");
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert("An error occurred while updating the blog.");
        }
    };
    
    

    return (
        <div>
            <Container>
                <Row style={{ display: 'flex', gap: '10px' }}>
                    {blogData.map((blog) => (
                        <Col md={2} style={{ boxSizing: 'border-box', border: '1px solid black', padding: '10px' }} key={blog._id}>
                            <h3>{blog.title}
                                <DeleteOutlined style={{ float: 'right', width: '20px' }} onClick={() => handleDeleteBlog(blog._id)} />
                                <EditOutlined style={{ float: 'right', width: '20px' }} onClick={() => handleUpdateBlog(blog)} />
                            </h3>
                            <p>{blog.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal isOpen={modalOpen} toggle={handleCloseModal}>
                <ModalHeader toggle={handleCloseModal}>Edit Blog</ModalHeader>

                <ModalBody>
                    {/* Render input fields to edit the blog post */}
                    {selectedBlog && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" className="form-control" value={selectedBlog.title} onChange={(e) => setSelectedBlog({ ...selectedBlog, title: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea id="description" className="form-control" value={selectedBlog.description} onChange={(e) => setSelectedBlog({ ...selectedBlog, description: e.target.value })} />
                            </div>
                            {/* Add other fields as needed */}
                        </div>
                    )}
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handleSaveChanges}>Save Changes</Button>{' '}
                    <Button color="secondary" onClick={handleCloseModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ShowBlog;
