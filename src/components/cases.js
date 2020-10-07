import React from "react"
import casesStyles from "./cases.module.scss"

const Card = props => (
  <div>
    Test
    {props.title}
  </div>
)

const Cases = () => (
  <div className={casesStyles.wrapper}>
    <div className={casesStyles.title}>
      <h1>Portfólio</h1>
    </div>
    <div className={casesStyles.first}>
      <div className={casesStyles.box}>
        <h1>Oi</h1>
        Olá
      </div>
    </div>
    <div className={casesStyles.second}>
      <div className={casesStyles.box}>
        <h1>Oi</h1>
        Olá
      </div>
    </div>
  </div>
)

export default Cases
