
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector, getState } from 'react-redux';

import { MdKeyboardArrowUp } from 'react-icons/md';


import PagePreloader from '../../Common/PagePreloader/PagePreloader';

import CardList from '../../Card/CardList';

import fetchCardsData from '../../../store/async-actions/fetchCardsData';
import ScrollToTop from '../../../hooks/scrollToTop';


const WoW = () => {
    const {
        cards,
        isCardsDataFetching,
        isCardsDataFetchError,
        cardsDataFetchErrorMessage
    } = useSelector(state => state.cardReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        scrollTop();
        const abortController = new AbortController();
        if (!cards.length) dispatch(fetchCardsData(abortController));

        return () => {
            abortController.abort();
        };
    }, []);

    const scrollPoint = useRef(null);

    const scrollTop = () => {
        scrollPoint.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    const makeFetchRequest = () => {
        const abortController = new AbortController();
        dispatch(fetchCardsData(abortController));
    };

    return (
        <div className="app-wrapper">
            <div ref={scrollPoint} className="section">
                <div className="container">
                    <section className="gallery">
                        <div className="gallery__wrapper">
                            <>
                                {isCardsDataFetching
                                    ? <PagePreloader />
                                    : isCardsDataFetchError
                                        ? <p className="error">{cardsDataFetchErrorMessage}</p>
                                        : <CardList />
                                }
                            </>
                            <button
                                className="gallery__button button"
                                disabled={isCardsDataFetching || isCardsDataFetchError}
                                onClick={makeFetchRequest}
                            >
                                Watch more
                            </button>

                            <button
                                className="pagination"
                                disabled={isCardsDataFetching || isCardsDataFetchError}
                                onClick={scrollTop}
                                aria-label="scroll top"
                            >
                                <MdKeyboardArrowUp color={'#fff'} size={'36px'} aria-label="scroll top" />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default WoW;