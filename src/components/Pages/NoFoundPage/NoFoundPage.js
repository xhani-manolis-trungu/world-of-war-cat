import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import noFoundPage from '../../../assets/images/no_found.png';

// /. Imports

const NoFoundPage = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate('/WoW', { replace: true });
  };

  return (
    <div className="section">
      <article className="section__wrapper">
        <img className="section__image" src={noFoundPage} alt="404 error" />
        <h1 className="section__title section__title-error">404</h1>
        <p className="section__link">
          Sorry, this page doesn't exist, return to home{' '}
          <span>
            <Link to="/WoW" onClick={goHomePage}>
              page
            </Link>
          </span>
        </p>
      </article>
    </div>
  );
};

export default NoFoundPage;
