/* eslint-disable react/prop-types */
import React from "react"
import casesStyles from "./cases.module.scss"
import Card from "./case-card"
import { Link } from "gatsby"

const Cases = props => (
  <section className={casesStyles.wrapper} id={props.sectionId}>
    <div
      className={casesStyles.title}
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-easing="ease"
    >
      <h1 data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
        Portfólio
      </h1>
    </div>

    <div
      className={casesStyles.first}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <Link to="#">
        <Card title="Amplia" imgSrc={"thumbnail.png"} tags="#Branding #UI" />
      </Link>
    </div>

    <div
      className={casesStyles.second}
      data-sal="slide-up"
      data-sal-delay="350"
      data-sal-easing="ease"
    >
      <Link to="#">
        <Card title="Amplia" imgSrc={"thumbnail.png"} tags="#Branding #UI" />
      </Link>
    </div>

    <div
      className={casesStyles.third}
      data-sal="slide-up"
      data-sal-delay="400"
      data-sal-easing="ease"
    >
      <Link to="#">
        <Card title="Amplia" imgSrc={"thumbnail.png"} tags="#Branding #UI" />
      </Link>
    </div>
  </section>
)

export default Cases
