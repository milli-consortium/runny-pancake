import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './hero.css'

const styles = {
    	height: "565px"
}
const Hero = ({style}) => {
	const data = useStaticQuery(graphql`
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
	  `)

	console.log(getImage, data)

	return (
		<div style={styles}>{data.images.edges.map(({ node, i })=> <div style={style}> <GatsbyImage key={i} image={node.childImageSharp} alt="" /></div>)}</div>
		)
}


export default Hero