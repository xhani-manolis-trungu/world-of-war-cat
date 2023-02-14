import { NavLink } from 'react-router-dom';

import './Intro.scss';

function Intro() {
    return (
        <div className="Intro">
            <header className="Intro-header">
                <h1>World of WarCat</h1>
                <NavLink
                    className="nav__menu_link"
                    to="/WoW"
                >
                    Let's See!
                </NavLink>
            </header>
        </div>
    );
  }
  
  export default Intro;
  