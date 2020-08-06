import React from 'react';
import { connect } from 'react-redux';
import {removeItemFromCart, increaseQuantity, decreaseQuantity} from '../../actions/cartActions';


function CartItem(props) {
  return (
    <li className="list-cart__item">
              <i className="list-cart__icon close" onClick={()=>props.remove({title: props.pizza.title, size: props.pizza.size})}></i>
							<div className="list-cart__img"><img className="img-responsive" src={require(`../../images/list-catalog/${props.pizza.image}.png`)} height="87" width="87" alt="Foto" /></div>
							<div className="list-cart__inner">
								<h3 className="list-cart__title">{props.pizza.title}</h3>
								<div className="list-cart__size"><span className="list-cart__size_name">Size:</span> {props.pizza.size}</div>
								<div className="list-cart__price-wrapper d-flex justify-content-between">
                <span class="minus" onClick={()=>props.decrease({title: props.pizza.title, size: props.pizza.size})}></span>
                <div className="list-cart__price">
                  <span className="color_primary">{props.pizza.count} x</span> ${props.pizza.price}
                </div>
                <span class="plus" onClick={()=>props.increase({title: props.pizza.title, size: props.pizza.size})}></span>
                </div>
							</div>
						</li>

  )
}

export default connect(null, {remove: removeItemFromCart, increase: increaseQuantity, decrease: decreaseQuantity})(CartItem);