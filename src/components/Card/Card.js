import React, { useEffect, useRef } from 'react';
import { createSearchParams, Outlet } from 'react-router-dom';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


import { BsHeartFill } from 'react-icons/bs';

import { useDispatch } from 'react-redux';

import Modal from '../Modal/Modal/Modal';

import image_placeholder from '../../assets/images/no_photo.png';
import { fetchCardsDetails } from '../../store/actions/cardActions';
import { setFavouriteStatus, setLikedCardsData } from '../../store/actions/cardActions';

import './Card.scss';

const useNavigateSearch = () => {
  return (pathname, params) => {
    return `${pathname}?${createSearchParams(params)}`;
  };

};

const Card = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const navigateSearch = useNavigateSearch();

  const { id, name, image, role, isFavourite } = props;

  const buttonLikeRef = useRef(null);

  const dispatch = useDispatch();

  const addToFavourite = () => {
    isFavourite
      ? dispatch(setFavouriteStatus(id, false))
      : dispatch(setFavouriteStatus(id, true));

    dispatch(setLikedCardsData());
  };

  const openTheModal = () => {
    dispatch(fetchCardsDetails(id));
    setIsOpen(true);
  };

  useEffect(() => {
    buttonLikeRef.current.classList.remove('unlike');
  }, []);

  return (
    <article className={role ? `${role} card` : 'card'}>
      <div className="card__preview">
        <div className="card__icons">
          <button
            className={isFavourite ? 'card__icons_button like' : 'card__icons_button unlike'}
            ref={buttonLikeRef}
            onClick={addToFavourite}
            aria-label="add to favourite"
          >
            <BsHeartFill color={'#fff'} size={'42px'} />
          </button>
        </div>
        <img
          className="card__image"
          src={image}
          alt="cat"
          onError={e => {
            (e.target).src = image_placeholder;
            (e.target).onerror = null;
          }}
        />
      </div>
      <div className="card__information">
        <h3 className="card__name">{name}</h3>
      </div>
      <button
        className="card__button button"
        onClick={() => openTheModal() }
      >
        Breed Details
      </button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} children={{ id, name, image, role, search: navigateSearch(`${id}`, { breed_ids: id, limit: 10 })}}>
      </Modal>
      <Outlet />
    </article>
  );
};

export default Card;