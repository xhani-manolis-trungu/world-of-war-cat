import { useSelector } from 'react-redux';

import Card from './Card';

const CardList = () => {
    const { cards } = useSelector(state => state.cardReducer);

    return (
        <div className="gallery__cards">
      {cards.map((item) => {
        return (
          <Card
            key={item.key_id}
            {...item}
          />
        );
      })
      }
    </div>
    );
};

export default CardList;