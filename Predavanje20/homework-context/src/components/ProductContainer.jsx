import Product from "./Product";
import styles from "./Container.module.css";

const ProductContainer = (props) => {
  return (
    <div className={styles.container}>
      {props.products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addToCart={props.addToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductContainer;
