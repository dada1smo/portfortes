/* eslint-disable react/prop-types */
import React from "react"
import articleStyles from "./article.module.scss"
import VisibilitySensor from "../utils/visibilitysensor";
import { Spring } from "react-spring/renderprops"

const Articles = (props) => {
  return (
    <VisibilitySensor once>
      {({ isVisible }) => (
        <Spring delay={100} to={{ width: isVisible ? "100%" : "50%" }}>
          {({ width }) => (
            <section
              className={articleStyles.wrapper}
              id={props.sectionId}
              style={{ width }}
            >
              <h1>Artigos</h1>
            </section>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default Articles
