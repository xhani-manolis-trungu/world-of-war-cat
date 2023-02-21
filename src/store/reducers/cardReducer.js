import {
  ACTION_FETCH_CARDS,
  ACTION_FETCH_CARDS_DATA_TOGGLE,
  ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS,
  ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE,
  ACTION_SET_FAVOURITE_STATUS,
  ACTION_SET_LIKED_CARDS_DATA,
  ACTION_FETCH_CARDS_DETAILS
} from '../actions/cardActions';

const initialState = {
  cards: [],
  gifData: [],
  likedCardsData: [],
  filteredCardsData: [],
  filteredCardsDataLength: 0,
  sortButtons: [
    {
      id: 'price',
      text: 'Price',
      isSorted: false
    },
    {
      id: 'age',
      text: 'Age',
      isSorted: false
    }
  ],
  isCardsDataFetching: true,
  isCardsDataFetchError: false,
  cardsDataFetchErrorMessage: 'error from fetchCardsData thunk',
  isGifDataFetching: true,
  isGifDataFetchError: false,
  gifDataFetchErrorMessage: 'error from fetchGifData thunk',
  isNotificationVisible: false,
  cardDetails: []
};


const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FETCH_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.payload]
      };
    case ACTION_FETCH_CARDS_DETAILS:
      return {
        ...state,
        cardDetails: action.payload
      };
    case ACTION_FETCH_CARDS_DATA_TOGGLE:
      return {
        ...state,
        isCardsDataFetching: action.payload.value
      };
    case ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS:
      return {
        ...state,
        isCardsDataFetchError: action.payload.value
      };
    case ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE:
      return {
        ...state,
        cardsDataFetchErrorMessage: action.payload.value
      };
    case ACTION_SET_FAVOURITE_STATUS:
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavourite: action.payload.status
            };
          }
          return item;
        })
      };

    case ACTION_SET_LIKED_CARDS_DATA:
      return {
        ...state,
        likedCardsData: state.cards.filter(item => item.isFavourite === true)
      };
    default:
      return state;
  }
};

export default cardReducer;