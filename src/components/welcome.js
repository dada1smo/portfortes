import React from "react"
import welcomeStyles from "./welcome.module.scss"
import TreeNav from "./tree"

const Welcome = () => (
  <section className={welcomeStyles.wrapper}>
    <div className={welcomeStyles.box}>
      <h1>
        bem-vindo(a)! <br />
        meu nome é <b>Adalberto Sampaio</b>, <b>designer</b> para web e aprendiz de <b>front-end</b>
      </h1>
      <div className={welcomeStyles.links}><TreeNav /></div>
    </div>
  </section>
)

export default Welcome
