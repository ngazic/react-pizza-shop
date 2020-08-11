import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { extractCartItems } from "../header/Cart";

export const ShoppingCart = (props) => {
  let cartItems = extractCartItems(props.items);
  return (
    <section className="section_mod-d">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="shopping-cart">
              <ul className="list-cart list-unstyled">
                {cartItems.map((item, key) => {
                  return <CartItem pizza={item} key={key} />;
                })}
              </ul>
            </div>

            </div>

          <div className="col-md-4">
            <section className="section-table-order">
              <h2 className="table-totals__title ui-title-inner">Cart Totals</h2>
              <table className="table-totals">
                <tbody>
                  <tr>
                    <td>
                      <b>CART SUBTOTAL</b>
                    </td>
                    <td className="text-right">${props.items.total}</td>
                  </tr>
                  <tr>
                    <td className="border-cell">
                      <b>SHIPPING AND HANDLING</b>
                    </td>
                    <td className="border-cell text-right">Free Shipping</td>
                  </tr>
                  <tr>
                    <td className="table-totals__total">Order Total</td>
                    <td className="table-totals__total">${props.items.total}</td>
                  </tr>
                </tbody>
              </table>

              <Link
                to="checkout"
                className="table-totals__btn ui-btn ui-btn-primary btn-effect"
              >
                proceed to checkout
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
