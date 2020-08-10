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

            <div class="row">
              <div class="col-md-6">
                <section class="section_mod-f">
                  <h2 class="ui-title-inner ui-title-inner_mod-c">
                    Calculate Shipping
                  </h2>
                  <form method="get" class="ui-form">
                    <select
                      class="selectpicker bs-select-hidden"
                      data-style="ui-select ui-select_mod-a"
                      data-width="100%"
                    >
                      <option>United Kingdom (UK)</option>
                      <option>United Kingdom (UK)-2</option>
                      <option>United Kingdom (UK)-3</option>
                    </select>
                    <div class="btn-group bootstrap-select">
                      <button
                        type="button"
                        class="btn dropdown-toggle ui-select ui-select_mod-a"
                        data-toggle="dropdown"
                        title="United Kingdom (UK)"
                      >
                        <span class="filter-option pull-left">
                          United Kingdom (UK)
                        </span>
                        &nbsp;<span class="ui-select__icon"></span>
                      </button>
                      <div class="dropdown-menu open">
                        <ul class="dropdown-menu inner" role="menu">
                          <li data-original-index="0" class="selected">
                            <a tabindex="0" class="" data-tokens="null">
                              <span class="text">United Kingdom (UK)</span>
                              <span class="glyphicon glyphicon-ok check-mark"></span>
                            </a>
                          </li>
                          <li data-original-index="1">
                            <a tabindex="0" class="" data-tokens="null">
                              <span class="text">United Kingdom (UK)-2</span>
                              <span class="glyphicon glyphicon-ok check-mark"></span>
                            </a>
                          </li>
                          <li data-original-index="2">
                            <a tabindex="0" class="" data-tokens="null">
                              <span class="text">United Kingdom (UK)-3</span>
                              <span class="glyphicon glyphicon-ok check-mark"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="State / County"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Postcode / ZIP"
                    />
                    <button class="ui-btn ui-btn-primary btn-effect">
                      update totals
                    </button>
                  </form>
                </section>
              </div>

              <div class="col-md-6">
                <section class="section_mod-f">
                  <h2 class="ui-title-inner ui-title-inner_mod-c">
                    Promotional Code
                  </h2>
                  <form class="ui-form">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your promotional code"
                    />
                    <button class="ui-btn ui-btn-primary btn-effect">
                      apply
                    </button>
                  </form>
                </section>
              </div>
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
                    <td class="text-right">$79.00</td>
                  </tr>
                  <tr>
                    <td class="border-cell">
                      <b>SHIPPING AND HANDLING</b>
                    </td>
                    <td class="border-cell text-right">Free Shipping</td>
                  </tr>
                  <tr>
                    <td class="table-totals__total">Order Total</td>
                    <td class="table-totals__total">$79.00</td>
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
