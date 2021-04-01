import * as React from "react"
//import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import Container from "../components/container"
import "../components/hero.css"
import { Typography, Carousel } from 'antd';


const { Title, Paragraph } = Typography;



function onChange(a, b, c) {
  console.log(a, b, c);
}

const IndexPage = ({data}) => {
  /*const data = useStaticQuery(graphql`
    query{
      images: allFile (filter: { extension: { regex: "/(jpg)/" }, sourceInstanceName: {eq: "images"}}){ 
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)*/

  return (
  <Container>
    <SEO title="Home" />
    <Carousel afterChange={onChange} style={{marginBottom: "15px"}} >
      <div>
        <StaticImage
          src="../images/1.jpg"
          
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem`, width: `100%`, height:`auto` }}
        />
        <Title level={2} style={{color: 'white', textAlign: 'center', position: 'relative', bottom: '120px' }}>
            1975: A Journey</Title>
      </div>

      <div>
        <StaticImage
          src="../images/2.jpg"
          
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem`, width: `100%`, height:`auto` }}
        />
      </div>

      <div>
        <StaticImage
          src="../images/3.jpg"
          
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem`, width: `100%`, height:`auto` }}
        />
      </div>
    
    </Carousel>

    <Paragraph>Milli is a consortium of individuals and 
    communities interested in the nurturing of archives. 
    Archives enable diverse stories. 
    This aim guides the work of the consortium, the purpose, 
    form and content of an archive, and what environments it could nourish in the future.</Paragraph>

    <Title level={3}>Collections</Title>
    <Paragraph>
     Preview of 3-5 collections.
    </Paragraph>

    <Title level={3}>Partners</Title>

    <Paragraph>
     List of partners
    </Paragraph>
  </Container>
  )
}


/*export const pageQuery = graphql`
  query{
    images: allFile (filter: { extension: { regex: "/(jpg)/" }, sourceInstanceName: {eq: "images"}}){ 
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
*/
export default IndexPage



