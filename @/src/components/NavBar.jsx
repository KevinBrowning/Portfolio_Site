import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul className="navbar-ul">
        <li>
          <button>
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/about">About Me</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/projects">Projects</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/contact">Contact Me</Link>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default NavBar