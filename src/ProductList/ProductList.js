import React, { Component } from "react";
import axios from "axios";
import CSS from "./ProductList.module.css";
import Form from "../Form/Form";
import FormFilter from "../FormFilter/FormFilter";
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
  deleteItem = (id) => {
    const formData = { countId: id };
    axios({ method: "delete", url: "/products", data: formData })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    this.getAllProducts();
  };
  saveFilteredProduct = (filtered) => {
    this.setState({
      products: [filtered],
    });
  };
  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <div className={CSS.container}>
        <Form onGetAllProducts={this.getAllProducts} />
        <FormFilter onSaveFilteredProduct={this.saveFilteredProduct} />

        <>
          {products && (
            <ul className={CSS.productsList}>
              {products.map((el) => (
                <li className={CSS.productListItem} key={el.countId}>
                  <button onClick={(e) => this.deleteItem(el.countId)}>
                    X
                  </button>
                  <p>
                    Назва:{" "}
                    <span className={CSS.productListTitle}>{el.name}</span>
                  </p>
                  <p>
                    id:{" "}
                    <span className={CSS.productListTitle}>{el.countId}</span>
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
                    <span className={CSS.productListTitle}>
                      {el.quantity} кг
                    </span>
                  </p>
                  <p>
                    Коментар:{" "}
                    <span className={CSS.productListTitle}>{el.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </>
      </div>
    );
  }
}
