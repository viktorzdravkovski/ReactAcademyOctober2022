import './RegisteredItemsContainer.css';
import ItemCard from './ItemCard';

const RegisteredItemsContainer = (props) => {
  const { items } = props;

  return (
    <div className='container'>
      <div className='item-container'>
        {items.map((item) => {
          //   return <ItemCard name={item.name} description={item.description} price={item.price}/>;
          return <ItemCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default RegisteredItemsContainer;
