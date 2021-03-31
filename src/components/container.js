/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Layout, 
         Divider, 
         Menu } from 'antd'
import "./layout.css"
import {GithubOutlined, 
        MediumCircleFilled, 
        TwitterCircleFilled} from '@ant-design/icons'

const { Header, Footer, Content } = Layout;


//import "./layout.css"

const Container = ({ defKey, children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

    return (
      <>
        <Layout>
          <Header style={{ background: "none" }}>
            <h1 style={{ display: "inline-block", marginLeft: "50px", marginTop: "17px"  }}>
            <Link to="/" style={{ fontFamily: "Rufina", 
                                  color: "#434343",
                                  fontSize: "36px",
                                  lineHeight: "22px",
                                  letterSpacing: "0.15em" }}>
              M1ll1
             </Link>
            </h1>

            <Menu style={{ marginRight: "35px", marginTop: "17px", backgroundColor: "#f0f2f5", float: "right" }}
            
            mode="horizontal"
            defaultSelectedKeys={defKey}>

              <Menu.Item key="1">
                <Link to="/page-2/">About</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/page-2/">Collections</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/page-2/">Partners</Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/page-2/">Get Involved</Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to="/page-2/">Login</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <div style={{ width: "100%"}}>
            <Divider orientation="center" 
                style={{ borderColor: "#3cb464",
                         borderWidth: "5px",
                         minWidth: "85%", 
                         width:"85%",
                         marginLeft: "auto",
                         marginRight: "auto"
                       }}>
            </Divider>
          </div>
          

          <Content style={{ maxWidth: "750px",
                            width: "70%",
                            margin: "auto auto"}}>{children}</Content>
          

          <Footer>
            <Link to="/" style={{ fontFamily: "Rufina", 
                                  color: "#434343",
                                  fontSize: "36px",
                                  lineHeight: "22px",
                                  letterSpacing: "0.15em" }}>
              M1ll1
             </Link>

             <p style={{fontSize: "18px", fontWeight: "400", marginBottom: "0px" }}>Contact <br />
               <p style={{fontSize: "20px", fontWeight: "500", marginBottom: "0px" }}>hello@milli.link</p>
             </p>

             <div class="social-links">
               <GithubOutlined />
               <MediumCircleFilled />
               <TwitterCircleFilled />

             </div>
             
             <div class="site-info">
              <span class="copyright">© {new Date().getFullYear()}, All rights reserved. </span>
              <a class="footer-link" href="https://janastu.org" target="_blank" rel="noopener">
                
                Made with ❤️
                
              </a>

              
            </div>
          </Footer>
         </Layout>
      </>
      )
/*  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )*/
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
