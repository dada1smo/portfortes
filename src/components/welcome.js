import React from "react"
import welcomeStyles from "./welcome.module.scss"
import TreeNav from "./tree"
import Monogram from "../../content/assets/monogram.svg"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const Welcome = () => (
  <section className={welcomeStyles.wrapper}>
    <div className={welcomeStyles.monogram}>
      <Link to="/">
        <Monogram />
      </Link>
    </div>
    <div className={welcomeStyles.box}>
      <h1>
        bem-vindo(a)! <br />
        meu nome é <b>Adalberto Sampaio</b>, sou <b>designer</b> para web e
        aprendiz de <b>front-end</b>
      </h1>
      <div className={welcomeStyles.links}>
        <TreeNav />
      </div>
    </div>
    <div className={welcomeStyles.social}>
      <a href="https://dribbble.com/dada1smo" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={["fab", "dribbble-square"]} />
      </a>
      <a href="https://github.com/dada1smo" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={["fab", "github-square"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/sampaio-afn/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
    </div>
  </section>
)

export default Welcome
