import React, { Component } from "react";
import axios from "axios";
import CSS from "./Form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    price: "",
    category: "",
    provider: "",
    shelfLife: "",
    quantity: "",

    text: "",
    responsname: null,
    responseError: null,
    isModalOpen: false,
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  openModal = () => {
    this.setState({
      name: "",
      price: "",
      category: "",
      provider: "",
      shelfLife: "",
      quantity: "",
      text: "",
      responsname: null,
      responseError: null,
      isModalOpen: true,
    });
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const {
      name,
      price,
      category,
      provider,
      shelfLife,
      quantity,
      text,
    } = this.state;
    e.preventDefault();

    const formData = {
      name,
      price,
      category,
      provider,
      shelfLife,
      quantity,
      text,
    };

    axios({ method: "post", url: "/products", data: formData })
      .then((response) => {
        this.setState({ responsname: response.data.status });

        this.props.onIsSubmit(response.data.status);
      })
      .catch((error) => {
        if (error.response.status != 200 || 201)
          this.setState({
            responseError: "Увы что-то пошло не так  :(",
          });
      });
  };

  render() {
    const {
      name,
      price,
      category,
      provider,
      shelfLife,
      quantity,
      text,
      responsname,
      responseError,
      isModalOpen,
    } = this.state;
    return (
      <div className={CSS.container}>
        <div className={CSS.revervePlaceText}>
          <button className={CSS.openModalButton} onClick={this.openModal}>
            +
          </button>
          <h3 className={CSS.modalTitle}>Додати товар</h3>
          <button className={CSS.closeModalButton} onClick={this.closeModal}>
            X
          </button>

          {responseError && <p>{responseError}</p>}
        </div>
        {isModalOpen && (
          <div>
            {responsname ? (
              <p className={CSS.successMail}>{responsname}</p>
            ) : (
              <form onSubmit={this.handleSubmit} className={CSS.from}>
                <input
                  className={CSS.formGroup}
                  type="text"
                  name="name"
                  value={name}
                  placeholder="enter product name"
                  required
                  onChange={this.handleChange}
                />
                <input
                  className={CSS.formGroup}
                  type="number"
                  name="price"
                  value={price}
                  placeholder="enter product price"
                  required
                  onChange={this.handleChange}
                />
                <input
                  className={CSS.formGroup}
                  type="text"
                  name="category"
                  value={category}
                  placeholder="enter product category"
                  required
                  onChange={this.handleChange}
                />
                <input
                  className={CSS.formGroup}
                  type="text"
                  name="provider"
                  value={provider}
                  placeholder="enter product provider"
                  required
                  onChange={this.handleChange}
                />
                <input
                  className={CSS.formGroup}
                  type="number"
                  name="shelfLife"
                  value={shelfLife}
                  placeholder="enter product shelf life"
                  required
                  onChange={this.handleChange}
                />
                <input
                  className={CSS.formGroup}
                  type="number"
                  name="quantity"
                  value={quantity}
                  placeholder="enter product quantity"
                  required
                  onChange={this.handleChange}
                />
                <textarea
                  className={`${CSS.formGroup} ${CSS.textarea}`}
                  name="text"
                  value={text}
                  placeholder="add comment..."
                  onChange={this.handleChange}
                ></textarea>
                <button
                  className={`${CSS.formGroup} ${CSS.button}`}
                  type="submit"
                >
                  add product
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    );
  }
}
