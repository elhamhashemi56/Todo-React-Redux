
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
            <div>
                <nav className='nav'>
                    <ul>
                        <li><Link to='/' > Home </Link></li>
                        <li><Link to='/aboutus'> Über mich </Link></li>
                        <li><Link to='/contactus'> Kontakt   </Link></li>
                        <li><Link to='/email'> Email </Link></li>
                    </ul>
                </nav>

            </div>
    )
}

export default Navbar;
