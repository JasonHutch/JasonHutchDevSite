import { Link } from 'react-router-dom';
import './header.css';

export interface IHeaderProps {
    handleNavigation:Function
}

const Header = (props:IHeaderProps) => {
    return (
        <div className='header'>
            <ul className='header__links'> 
                <li onClick={() => {props.handleNavigation("/")}}>
                    <Link className="header__link" to='/'>Home</Link>
                </li>
                <li onClick={() => {props.handleNavigation("/about")}}>
                    <Link className="header__link" to='/about'>About</Link>
                </li>
                <li onClick={() => {props.handleNavigation("/work")}}>
                    <Link className="header__link" to='/work'>Work Experience</Link>
                </li>
                <li onClick={() => {props.handleNavigation("/projects")}}>
                    <Link className="header__link" to='/projects'>Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;