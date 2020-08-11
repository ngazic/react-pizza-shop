import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { extractCartItems } from "../header/Cart";

export const ShoppingCart = (props) => {
  let cartItems = extractCartItems(props.items);
  return (
    <section class="section_mod-d">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="shopping-cart">
              <ul className="list-cart list-unstyled">
                {cartItems.map((item, key) => {
                  return <CartItem pizza={item} key={key} />;
                })}
              </ul>
            </div>

            </div>

          <div class="col-md-4">
            <section class="section-table-order">
              <h2 class="table-totals__title ui-title-inner">Cart Totals</h2>
              <table class="table-totals">
                <tbody>
                  <tr>
                    <td>
                      <b>CART SUBTOTAL</b>
                    </td>
                    <td class="text-right">${props.items.total}</td>
                  </tr>
                  <tr>
                    <td class="border-cell">
                      <b>SHIPPING AND HANDLING</b>
                    </td>
                    <td class="border-cell text-right">Free Shipping</td>
                  </tr>
                  <tr>
                    <td class="table-totals__total">Order Total</td>
                    <td class="table-totals__total">${props.items.total}</td>
                  </tr>
                </tbody>
              </table>

              <Link
                to="checkout"
                class="table-totals__btn ui-btn ui-btn-primary btn-effect"
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
