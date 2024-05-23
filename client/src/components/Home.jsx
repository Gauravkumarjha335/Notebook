import React from 'react'
import IndexNavbar from './IndexNavbar'
import Blogform from './Blogform'
import ShowBlog from './ShowBlog'
import { Container } from 'reactstrap'
function Home() {
  return (
    <>

      <IndexNavbar />/

      <Blogform />


      <Container style={{marginTop : '100px'}}>
        <ShowBlog />
      </Container>

    </>
  )
}

export default Home