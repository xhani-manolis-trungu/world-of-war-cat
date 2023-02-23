import { NavLink } from 'react-router-dom';

import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro-page">
            <div className="Intro">
                <div className="section__title">
                    <h1 className="intro-heading">World of WarCat</h1>
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
        </div>
    );
};

export default Intro;
