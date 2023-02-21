
export const ACTION_SET_LIKED_CARDS_DATA = 'ACTION_SET_LIKED_CARDS_DATA';
export const ACTION_SET_FAVOURITE_STATUS = 'ACTION_SET_FAVOURITE_STATUS';

export const ACTION_FETCH_CARDS = 'ACTION_FETCH_CARDS';
export const ACTION_FETCH_CARDS_DETAILS = 'ACTION_FETCH_CARDS_DETAILS';
export const ACTION_FETCH_CARDS_DATA_TOGGLE = 'ACTION_FETCH_CARDS_DATA_TOGGLE';

export const ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS = 'ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS';
export const ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE = 'ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE';

export const fetchCards = (data) => {
    return {
      type: ACTION_FETCH_CARDS,
      payload: data
    };
  };

export const fetchCardsDetails = (data) => {
  return {
    type: ACTION_FETCH_CARDS_DETAILS,
    payload: data
  };
};
export const fetchCardsDataToggle = (value) => {
    return {
    type: ACTION_FETCH_CARDS_DATA_TOGGLE,
    payload: {
      value
    }
  };
};

export const setFetchCardsDataErrorStatus = (value) => {
    return {
        type: ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS,
        payload: {
        value
        }
    };
};

export const setFetchCardsDataErrorMessage = (value) => {
    return {
        type: ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE,
        payload: {
        value
        }
    };
};

export const setLikedCardsData = () => {
    return {
      type: ACTION_SET_LIKED_CARDS_DATA
    };
  };

export const setFavouriteStatus = (id, status) => {
    return {
        type: ACTION_SET_FAVOURITE_STATUS,
        payload: { id, status }
    };
};