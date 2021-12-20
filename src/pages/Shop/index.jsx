import { useState, useEffect } from "react";
import { Product } from "../../components/Product";
import styles from "./Shop.module.scss";

const products=[];
const Shop = () => {

const[getProducts, setProducts] = useState(products);
    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));

    }, []);

    return(
        <div >
            <div className={styles.product_list}>
            {getProducts.map((product, index) => (
            <Product  key={index} data={product} />
          ))}              
            </div>
        </div>
    )
}

export {Shop};