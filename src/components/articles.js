/* eslint-disable react/prop-types */
import React from "react"
import articleStyles from "./article.module.scss"
import VisibilitySensor from "../utils/visibilitysensor"
import { Spring } from "react-spring/renderprops"
import Arrow from "../../content/assets/arrow.svg"

const Articles = props => {
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
              <div
                className={articleStyles.container}
                data-sal="fade"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <h1>Artigos</h1>
                <div className={articleStyles.entry}>
                  <Arrow />
                  <div className={articleStyles.title}>
                    <a
                      href="https://medium.com/@dada1smo/temas-que-eu-queria-ter-estudado-melhor-quando-estava-come%C3%A7ando-a-aprender-html-css-1ba058d71bd6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>
                        Temas que eu queria ter estudado melhor quando estava
                        começando a aprender HTML/CSS
                      </h3>
                    </a>
                    <div className={articleStyles.data}>
                      publicado em 3 de julho de 2020
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default Articles
