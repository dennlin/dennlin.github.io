import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/letter-d (512px).png'
import LogoSubtitle from '../../assets/images/Screen Shot 2023-09-18 at 3.05.55 PM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHome, faPaperclip, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='logoSub' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faPaperclip} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="connect-link" to="/connect">
                <FontAwesomeIcon icon={faComments} color='#4d4d4e' />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar