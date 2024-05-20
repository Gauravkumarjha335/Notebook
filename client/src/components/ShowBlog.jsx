import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

function ShowBlog() {
    const [blogdata, setblogdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/auth/blog');
                const data = await response.json();
                setblogdata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {blogdata.map((item) => (
                        <Col key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default ShowBlog;
