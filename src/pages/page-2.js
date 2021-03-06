import * as React from "react"
import Container from "../components/container"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SecondPage = () => (
  <Container>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default SecondPage
