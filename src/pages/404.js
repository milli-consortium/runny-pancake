import * as React from "react"

import Container from "../components/container"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Container>
)

export default NotFoundPage
