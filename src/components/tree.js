import React, { memo, useState } from "react"
import { useSpring, a, animated } from "react-spring"
import { useMeasure, usePrevious } from "../utils/helpers"
import { Link } from "gatsby"
import styled from "styled-components"
import * as Icons from "../utils/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const Frame = styled("div")`
  position: relative;
  padding: 0.5rem 0 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #ffffff;
  fill: #fdca40;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Space Mono", monospaced;

  a {
    color: #ffffff;

    svg {
      color: #cccccc;
      margin-right: 0.5rem;
    }
  }
`

const Title = styled("span")`
  vertical-align: middle;
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 0.5rem;
  padding: 0 0 0 1rem;
  border-left: 2px dashed #414c63;
  overflow: hidden;
`

const toggle = {
  width: "1rem",
  height: "1rem",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle",
}

const Tree = memo(({ children, name, url, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  })
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Plus"}SquareO`]
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>
        <Link to={url}>{name}</Link>
      </Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

const TreeNav = () => (
  <>
    <Tree name={<b>NAVEGAÇÃO</b>} defaultOpen>
      <Tree name={<span><FontAwesomeIcon icon="eye" />portfólio</span>} url="/">
        <Tree name="hello" />
        <Tree name="hello" />
      </Tree>
      <Tree name={<span><FontAwesomeIcon icon="feather" />artigos</span>} url="/" />
      <Tree name={<span><FontAwesomeIcon icon="star-of-life" />sobre</span>} url="/" />
    </Tree>
  </>
)

export default TreeNav
