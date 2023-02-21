import { NavLink } from 'react-router-dom';

import './Intro.scss';

const Intro = () => {
    return (
        <div className="Intro">
            <div className="section__title">
                <h1>World of WarCat</h1>
            </div>
            <header className="Intro-header">
                <NavLink
                    className="nav__menu_link"
                    to="/WoW"
                >
                    Let's See!
                </NavLink>
            </header>
        </div>
    );
  };
  
  export default Intro;
  