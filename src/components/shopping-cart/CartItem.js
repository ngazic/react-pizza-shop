import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/actions/cartActions";

export const CartItem = (props) => {
  return (
    <li className="list-cart__item d-flex">
      <i
        className="list-cart__icon close"
        onClick={() =>
          props.remove({
            title: props.pizza.title,
            size: props.pizza.size,
            price: props.pizza.price,
          })
        }
      ></i>
      <div className="list-cart__img flex-grow-1">
        <img
          className="img-responsive"
          src={require(`../../assets/images/list-catalog/${props.pizza.image}.png`)}
          height="87"
          width="87"
          alt="Foto"
        />
      </div>
      <div className="list-cart__inner flex-grow-2">
        <h3 className="list-cart__title">{props.pizza.title}</h3>
        <div className="list-cart__size">
          <span className="list-cart__size_name">Size:</span> {props.pizza.size}
        </div>
        <div className="list-cart__price-wrapper d-flex justify-content-between flex-wrap">
          <div className=" d-inline-flex flex-grow-1 justify-content-between ">
            <span
              className="minus"
              onClick={() =>
                props.decrease({
                  title: props.pizza.title,
                  size: props.pizza.size,
                  price: props.pizza.price,
                })
              }
            ></span>
            <div className="list-cart__price">
              <h5 className="color_primary">
                {props.pizza.count} x ${props.pizza.price}
              </h5>
            </div>
            <span
              className="plus"
              onClick={() => {
                props.increase({
                  title: props.pizza.title,
                  size: props.pizza.size,
                  price: props.pizza.price,
                });
              }}
            ></span>
          </div>
          <div className="list-cart__total">
            <h6>Total:&nbsp; </h6><h4>${props.pizza.price * props.pizza.count}</h4>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  remove: removeItemFromCart,
  increase: increaseQuantity,
  decrease: decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
