import React, { Component } from "react";
import axios from "axios";

import CSS from "./ProductList.module.css";
export default class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getAllProducts();
  }
  getAllProducts = () => {
    axios({ method: "get", url: "/products" })
      .then((response) => {
        this.setState({ products: response.data.data });
      })
      .catch((error) => {
        if (error.response.status != 200 || 201)
          this.setState({
            responseError: "Увы что-то пошло не так  :(",
          });
      });
  };

  render() {
    const { products } = this.state;
    return (
      <div className={CSS.container}>
        {products && (
          <ul className={CSS.productsList}>
            {products.map((el) => (
              <li className={CSS.productListItem} key={el.countId}>
                <p>
                  Назва: <span className={CSS.productListTitle}>{el.name}</span>
                </p>
                <p>
                  id: <span className={CSS.productListTitle}>{el.countId}</span>
                </p>
                <p>
                  Ціна:{" "}
                  <span className={CSS.productListTitle}>{el.price} uah</span>
                </p>
                <p>
                  Категорія:{" "}
                  <span className={CSS.productListTitle}>{el.category}</span>
                </p>
                <p>
                  Постачальник:{" "}
                  <span className={CSS.productListTitle}>{el.provider}</span>
                </p>
                <p>
                  Термін придатності:{" "}
                  <span className={CSS.productListTitle}>
                    {el.shelfLife} days
                  </span>
                </p>
                <p>
                  Вимірність:{" "}
                  <span className={CSS.productListTitle}>{el.quantity} кг</span>
                </p>
                <p>
                  Коментар:{" "}
                  <span className={CSS.productListTitle}>{el.text}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
