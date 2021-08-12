import "./styles.css";
import { Profiler, useState } from "react";

export default function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  const productList = {
    products: [
      {
        _id: "dress1",
        title: "Dress 1",
        image: "images/dress1.jpeg",
        description: "About this dress",
        prince: 300,
        availableSizes: ["S", "M", "L", "XL"]
      },
      {
        _id: "dress2",
        title: "Dress 2",
        image: "images/dress2.jpeg",
        description: "About this dress",
        prince: 250,
        availableSizes: ["S", "M", "L", "XL"]
      },
      {
        _id: "dress3",
        title: "Dress 3",
        image: "images/dress3.jpeg",
        description: "About this dress",
        prince: 350,
        availableSizes: ["S", "M", "L", "XL"]
      },
      {
        _id: "dress4",
        title: "Dress 4",
        image: "images/dress4.jpeg",
        description: "About this dress",
        prince: 600,
        availableSizes: ["S", "M", "L", "XL"]
      }
    ]
  };

  const addProductToCard = (product) => {
    setProductsInCart([...productsInCart, product]);
  };

  const allProducts = productList.products.map((product, i) => {
    return (
      <div key={i}>
        <li key={i}> {product.title} </li>
        <button onClick={() => addProductToCard(product)}>Add to cart</button>
      </div>
    );
  });

  const deleteFromCart = (id) => {
    console.log(productList);
    let productInCart = productsInCart.filter((product) => {
      return id !== product._id;
    });
    setProductsInCart(productInCart);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ul>{allProducts}</ul>
      <h1>Cart</h1>
      <ul>
        {productsInCart.map((product, i) => {
          return (
            <div key={i}>
              <li key={i}> {product.title} </li>
              <button key={i} onClick={() => deleteFromCart(product._id)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
