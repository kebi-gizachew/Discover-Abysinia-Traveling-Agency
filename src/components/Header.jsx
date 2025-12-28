import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="header-div">
            <h1>Discover Abysinia</h1>
            <ul className="nav-header">
                <li className="header-link">
                    <NavLink 
                        to="/" 
                        style={({ isActive }) => ({ 
                            color: isActive ? '#66371b' : '#333333',
                            fontWeight: isActive ? '700' : '600'
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="header-link">
                    <NavLink 
                        to="/destination"
                        style={({ isActive }) => ({ 
                            color: isActive ? '#66371b' : '#333333',
                            fontWeight: isActive ? '700' : '600'
                        })}
                    >
                        Destinations
                    </NavLink>
                </li>
                <li className="header-link">
                    <NavLink 
                        to="/contact"
                        style={({ isActive }) => ({ 
                            color: isActive ? '#66371b' : '#333333',
                            fontWeight: isActive ? '700' : '600'
                        })}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header