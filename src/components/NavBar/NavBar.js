import { Component } from "react"
import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName={styles.activeLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default NavBar
