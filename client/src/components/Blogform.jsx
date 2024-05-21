import  { useState } from 'react'
import { Container } from 'reactstrap'

function Blogform() {

    const [formdata, setformdata] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    }
    // const handleSubmit = async () => {
    //     try {
    //         const response = await fetch('/api/auth/blog', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formdata)
    //         });
    //         if (response.ok) {
    //             alert("blog created Sussfully")
    //         } else {
    //             alert("Blog not Created ")
    //         }
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // }
    return (
        <>
            <Container style={{ margin: 'auto' }} >

                <h1>Create your blog</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Enter your title</label>
                    <input type="text" name='title' value={formdata.title} onChange={handlechange} />
                    <label htmlFor="">Enter your description</label>
                    <input type="text" name='description' value={formdata.description} onChange={handlechange} />
                    <button type='submit'>Submit </button>
                </form>

            </Container>

        </>
    )
}

export default Blogform