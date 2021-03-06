import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/SEO/SEO';
import { Link, graphql } from 'gatsby'
import {
    map,
    mapHeader,
    mapWindow,
    fromLeft,
    fromRight,
    mapWindowLink,
} from "./map.module.css"

const MapPage = ({ data }) => {

    return (
        <Layout pageTitle="Map of the blog posts">
            <Seo />
            <div className={map}>
                <div className={fromLeft}>
                    <h2 className={mapHeader}>Cooking</h2>
                    <div className={mapWindow}>
                        {data.allMdx.nodes.filter
                            (node => node.frontmatter.topic === "Cooking")
                            .map(node => (

                                <Link className={mapWindowLink} to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            ))}
                    </div>
                </div>
                <div className={fromRight}>
                    <h2 className={mapHeader}>Movies</h2>
                    <div className={mapWindow}>
                        {data.allMdx.nodes.filter
                            (node => node.frontmatter.topic === "Movies")
                            .map(node => (

                                <Link className={mapWindowLink} to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            ))}</div>

                </div>
                <div className={fromLeft}>
                    <h2 className={mapHeader}>Programming</h2>
                    <div className={mapWindow}>
                        {data.allMdx.nodes.filter
                            (node => node.frontmatter.topic === "Programming")
                            .map(node => (

                                <Link className={mapWindowLink} to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            ))}
                    </div>
                </div>
                <div className={fromRight}>
                    <h2 className={mapHeader}>Society</h2>
                    <div className={mapWindow}>
                        {data.allMdx.nodes.filter
                            (node => node.frontmatter.topic === "Society")
                            .map(node => (

                                <Link className={mapWindowLink} to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </Layout >
    )
}
export const query = graphql`
  query {
    allMdx {
        nodes {
          frontmatter {
            category
            title
            topic
          }
          slug
        }
      }  
  }
`

export default MapPage