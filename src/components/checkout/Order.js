import React from "react";
import { connect } from "react-redux";
import { extractCartItems } from "../header/Cart";

function Order(props) {
  let cartItems = extractCartItems(props.items);
  console.log('cart items are')
  console.log(cartItems)
  return (
    <table className="table-order">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => {
          return (
            <tr>
              <td className="no-br">
                {item.title}<span className="color_primary"> x </span>
                <span className="enumerator__input">{item.count}</span>
              </td>
              <td>
                <span className="table-order__price">${item.price * item.count}</span>
              </td>
            </tr>
          );
        })}
       
        <tr>
          <td className="table-order__total">Order Total</td>
          <td className="table-order__total">${props.items.total}</td>
        </tr>
      </tbody>
    </table>
  );
}
const mapStateToProps = (state) => ({
  items: state.cart,
});
export default connect(mapStateToProps, null)(Order);
