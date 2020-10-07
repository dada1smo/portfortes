import React from "react"
import Sky from "../components/sky"

export default function Home({ children, location }) {
  return (
    <div className="home">
      <Sky />
      <div>{children}</div>
    </div>
  )
}
