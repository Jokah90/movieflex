import { Link } from 'react-router-dom'
import style from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbarWrapper}>
            <Link to="/" className={style.link}>Home</Link>
            <Link to="/favorites" className={style.link}>Favorites</Link>
        </nav>
    )
}

export default Navbar