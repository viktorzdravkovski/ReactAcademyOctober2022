import Product from "./Product";
import styles from "./Container.module.css";

const ShoppingCartContainer = (props) => {
  return (
    <div className={styles.container}>
      {props.shoppingCartProducts.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            removeFromCart={props.removeFromCart}
          />
        );
      })}
      <button onClick={props.emptyCart}>Delete all</button>
    </div>
  );
};

export default ShoppingCartContainer;
