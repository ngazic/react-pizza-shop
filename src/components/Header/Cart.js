import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';

function Cart(props) {
	let cartItems = []
	Object.getOwnPropertyNames(props.items).forEach((item,index)=>{
		if(typeof props.items[item] === 'object') {
			Object.getOwnPropertyNames(props.items[item]).forEach((size,ind)=>{
				if(typeof props.items[item][size] === 'object') {
				let temp = {
					title: item,
					image: props.items[item].image,
					size,
					count: props.items[item][size].count,
					price: props.items[item][size].price,
				}
				cartItems.push(temp);
				}
			})
		}
	})
  return (
    <div className="sb-slidebar sb-right sb-active">
				<section className="section-list-cart">
					<h2 className="ui-title-inner">Cart Totals</h2>
          <span className="sb-toggle-right" ><i className="icon pe-7s-close" onClick={props.closeCart}></i></span>
					<ul className="list-cart list-unstyled">
						{
							cartItems.map((item,key)=>{
								return <CartItem pizza={item} key={key} />
							})
						}
					</ul>
					<div className="total-price clearfix">Order Total
						<span className="total-price__number">$79.00</span>
					</div>
					<button className="total-price__btn ui-btn ui-btn_mod-a btn-effect btn-block" >view shopping cart</button>
					<button className="total-price__btn ui-btn ui-btn-primary btn-effect btn-block" >checkout</button>
				</section>
    </div>
  );
}

const mapStateToProps = (state) => ({
	items: state.cart
})

export default connect(mapStateToProps,null)(Cart);