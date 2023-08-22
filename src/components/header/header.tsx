import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <ul className='header__links'> 
                <a href='#WorkExperience'>
                    <span className="header__link">Experience</span>
                </a>
                <a href='#AboutMe'>
                    <p className="header__link">About</p>
                </a>
                <a href='#Projects'>
                    <span className="header__link">Projects</span>
                </a>
            </ul>
        </div>
    );
};

export default Header;