/* eslint-disable react/prop-types */
import React from "react"
import casesStyles from "./cases.module.scss"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"
import Arrow from "../../content/assets/arrow.svg"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={props.alt} fluid={imageFluid} />
    }}
  />
)

const Card = props => (
  <div className={casesStyles.card}>
    <Image filename={props.imgSrc} alt={props.imgAlt} />
    <div className={casesStyles.name}>
      <h2>{props.title}</h2>
      <Arrow />
    </div>
    <div className={casesStyles.tags}>
      {props.tags}
    </div>
  </div>
)

export default Card
