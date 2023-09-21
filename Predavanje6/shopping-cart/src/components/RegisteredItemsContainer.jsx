import './RegisteredItemsContainer.css';
import ItemCard from './ItemCard';

const RegisteredItemsContainer = (props) => {
    const {items, onDeleteClickHandler, onPermanentlyDeleteItemsHandler, onSortClickHandler} = props;

    return (
        <div className='container'>
            <div className='item-container'>
                {items.map((item) => {
                    //   return <ItemCard name={item.name} description={item.description} price={item.price}/>;
                    return <ItemCard item={item} onDeleteClickHandler={onDeleteClickHandler}/>;
                })}
            </div>
            {
                onPermanentlyDeleteItemsHandler &&
                <button onClick={onPermanentlyDeleteItemsHandler}>Delete elements</button>
            }
            {
                onSortClickHandler && <button onClick={onSortClickHandler}>Sort list</button>
            }
        </div>
    );
};

export default RegisteredItemsContainer;
