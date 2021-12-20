import styles from "./Product.module.scss";

const Product = (props) => {
    const data = props.data || {
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: '109.95',
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    }
    return (
        <div className={styles.product}>
            <div>
                <img src={data.image} alt={data.title} />
            </div>
            <div>
                <h3>{data.title}</h3>
            <p>{data.price}</p>
            </div>
            <p>{data.description}</p>
        </div>
    );
};

export { Product };