import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : undefined)

    return (
        <Navbar
            className='d-flex justify-content-between px-5'
            variant='light'
            style={{ background: '#58585a' }}
        >
            <Navbar.Brand>
                <img
                    width="50"
                    src="/assets/img/poke-icon.jpg"
                    alt=""
                />
            </Navbar.Brand>
            <div>
                <NavLink
                    className={activeClass + "m-3"}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={activeClass}
                    to="/pokemons"
                >
                    Pokemons
                </NavLink>
            </div>
        </Navbar>
    )
}
export default Menu
