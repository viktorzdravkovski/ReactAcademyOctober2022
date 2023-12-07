import styles from "./Product.module.css";

const Product = (props) => {
  const addToCartHandler = () => {
    props?.addToCart(props.product.id);
  };

  const removeFromCartHandler = () => {
    props?.removeFromCart(props.product.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h3>{props.product.name}</h3>
        <p>{props.product.description}</p>
      </div>
      <div>
        <h3>${props.product.price}</h3>
        {props.addToCart && (
          <button onClick={addToCartHandler}>Add to cart</button>
        )}
        {props.removeFromCart && (
          <button onClick={removeFromCartHandler}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default Product;
