import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                {/* <li>
                    IMG POCHOCLOS 
                </li> */}
                <li>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </li>
                <li>
                <Link to="/lanzamientos">
                        <button>Ultimos Lanzamientos</button>
                    </Link>
                </li>
                <li>
                <Link to="/populares">
                        <button>Populares</button>
                    </Link>
                </li>
                <li>
                <Link to="/buscar">
                        <button>Buscar</button>
                    </Link>
                </li>
            </ul>
        </nav>
    ) 
}

export default Nav