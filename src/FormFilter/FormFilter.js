import React, { Component } from "react";
import axios from "axios";
import CSS from "./FormFilter.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";

export default class Form extends Component {
  state = {
    countId: "",
    responsname: null,
    responseError: null,
    isModalOpen: false,
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  openModal = () => {
    this.setState({
      countId: "",
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
    const { countId } = this.state;
    e.preventDefault();

    axios({ method: "get", url: `/products/${countId}` })
      .then((response) => {
        console.log(response);
        this.setState({
          responsname: response.data.status,
        });
        this.props.onSaveFilteredProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status != 200 || 201)
          this.setState({
            responseError: "Id не знайдено",
          });
      });
  };

  render() {
    const {
      countId,

      responsname,
      responseError,
      isModalOpen,
    } = this.state;
    return (
      <div className={CSS.container}>
        <div className={CSS.revervePlaceText}>
          <button className={CSS.openModalButton} onClick={this.openModal}>
            <BsFillPlusCircleFill />
          </button>
          <h3 className={CSS.modalTitle}>Введiть ID товару</h3>
          <button className={CSS.closeModalButton} onClick={this.closeModal}>
            <BsFillXCircleFill />
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
                  type="number"
                  name="countId"
                  value={countId}
                  placeholder="enter product countId"
                  required
                  onChange={this.handleChange}
                />

                <button
                  className={`${CSS.formGroup} ${CSS.button}`}
                  type="submit"
                >
                  search
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    );
  }
}
