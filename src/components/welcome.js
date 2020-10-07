import React from "react"
import welcomeStyles from "./welcome.module.scss"

const Welcome = () => (
  <section className={welcomeStyles.wrapper}>
    <div className={welcomeStyles.box}>
      <h1>
        bem-vindo(a)! <br />
        meu nome é <b>Adalberto Sampaio</b>, <b>designer</b> para web e aprendiz de <b>front-end</b>
      </h1>
    </div>
  </section>
)

export default Welcome
