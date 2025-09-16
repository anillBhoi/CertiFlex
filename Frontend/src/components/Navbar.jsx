import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">CertiFlex</Link>
        <nav className="navbar__nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/upload" className={({ isActive }) => isActive ? 'active' : ''}>Upload</NavLink>
          <NavLink to="/verify" className={({ isActive }) => isActive ? 'active' : ''}>Verify</NavLink>
          <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>Admin</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/delete" className={({ isActive }) => isActive ? 'active' : ''}>Delete</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


