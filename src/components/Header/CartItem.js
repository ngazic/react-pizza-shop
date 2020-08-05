import React from 'react';

export default function CartItem(props) {
  return (
    <li className="list-cart__item">
              <i className="list-cart__icon close"></i>
							<div className="list-cart__img"><img className="img-responsive" src={require(`../../images/list-catalog/${props.pizza.image}.png`)} height="87" width="87" alt="Foto" /></div>
							<div className="list-cart__inner">
								<h3 className="list-cart__title">{props.pizza.title}</h3>
								<div className="list-cart__size"><span className="list-cart__size_name">Size:</span> {props.pizza.size}</div>
								<div className="list-cart__price"><span className="color_primary">{props.pizza.count} x</span> ${props.pizza.price}</div>
							</div>
						</li>
					
  )
}
