import React from "react"
import Link from "gatsby-link"

const Menu = () => {
  return (
    <div
      className="menu"
      style={{
        background: "#f4f4f4",
        paddingTop: "10px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li className="home">
          <Link to="/">🏠</Link>
        </li>
        <li className="blog">
          <Link to="/blog">📄</Link>
        </li>
        <li className="about">
          <Link to="/about">ℹ️</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
