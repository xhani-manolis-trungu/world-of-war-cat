
import image_placeholder from '../../assets/images/no_photo.png';

import {
    fetchCardsDataToggle, fetchCardsDetails,
    setFetchCardsDataErrorMessage,
    setFetchCardsDataErrorStatus
} from '../actions/cardActions';
    

const fetchCardDetails = (breed) => {
    return async (dispatch) => {
        try {
            const url = `https://api.thecatapi.com/v1/images/${breed.search}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': 'live_37WZvLmbEFAfFb8Y2z9eIFxasFRK4OboEYq0ZU2UlXEOJCAEPbBt3MVUJwQKAiKy'
                }
            });

            if (!response.ok) {
                dispatch(setFetchCardsDataErrorMessage('Error: There are some problems with response of breeds data'));
                console.error('There are some problems with response');
            }

            const data = await response.json();

            const actualData = [];

            const item = data[0];

            actualData.push(
                {
                    data_link: url,
                    description: item.breeds[0].description,
                    id: item.id,
                    image: !item['url'] || !item.url ? image_placeholder : item.url,
                    name: item.breeds[0].name,
                    wikipedia_url: item.breeds[0].wikipedia_url
                }
            );

            dispatch(fetchCardsDetails(actualData));
        } catch (error) {
            dispatch(setFetchCardsDataErrorMessage(`Error: ${error.message} breeds data.`));
            dispatch(setFetchCardsDataErrorStatus(true));
        } finally {
            setTimeout(() => {
                dispatch(fetchCardsDataToggle(false));
            }, 500);
        }
    };
};

export default fetchCardDetails;