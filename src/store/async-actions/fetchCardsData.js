import {
    fetchCards,
    fetchCardsDataToggle,
    setFetchCardsDataErrorMessage,
    setFetchCardsDataErrorStatus
} from '../actions/cardActions';

import image_placeholder from '../../assets/images/no_photo.png';

const fetchCardsData = (abortController) => {
    const pageCount = Math.floor(Math.random() * 10);

    return async (dispatch) => {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=live_37WZvLmbEFAfFb8Y2z9eIFxasFRK4OboEYq0ZU2UlXEOJCAEPbBt3MVUJwQKAiKy&limit=6&page=${pageCount}`, { signal: abortController.signal });

            if (!response.ok) {
                dispatch(setFetchCardsDataErrorMessage('Error: There are some problems with response of breeds data'));
                console.error('There are some problems with response');
            }

            const data = await response.json();

            const actualData = [];

            data.forEach((item) => {

                if (!item['image'] || !item.image) {
                    item.image = { url: image_placeholder };
                }
                // /. response validation

                actualData.push(
                    {
                        id: item.id,
                        key_id: `${Math.random() + item.id}`,
                        image: item.image.url,
                        name: item.name,
                        location: item.origin,
                        paw: '4',
                        age: `${Math.floor(Math.random() * 12) + 1} mth.`,
                        isFavourite: false,
                        description: item.description,
                        cfa_url: item.cfa_url,
                        wikipedia_url: item.wikipedia_url
                    }
                );
            });

            dispatch(fetchCards(actualData));

        } catch (error) {
            dispatch(setFetchCardsDataErrorMessage(`Error: ${error.message} breeds data.`));
            dispatch(setFetchCardsDataErrorStatus(true));
            console.error(error.message);
        } finally {
            setTimeout(() => {
                dispatch(fetchCardsDataToggle(false));
            }, 500);
        }
    };
};

export default fetchCardsData;