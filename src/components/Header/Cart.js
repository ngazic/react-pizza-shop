import React from 'react';

const img1 = require('../../images/list-catalog/1.png');
const img2 = require('../../images/list-catalog/2.png');
const img3 = require('../../images/list-catalog/3.png');

function Cart(props) {
  return (
    <div className="sb-slidebar sb-right sb-active">
				<section className="section-list-cart">
					<h2 className="ui-title-inner">Cart Totals</h2>
          <span class="sb-toggle-right" ><i class="icon pe-7s-close" onClick={props.closeCart}></i></span>
					<ul className="list-cart list-unstyled">
						<li className="list-cart__item">
              <i className="list-cart__icon close"></i>
							<div className="list-cart__img"><img className="img-responsive" src={img1} height="87" width="87" alt="Foto" /></div>
							<div className="list-cart__inner">
								<h3 className="list-cart__title">Moorish Lamb</h3>
								<div className="list-cart__size"><span className="list-cart__size_name">Size:</span> Large</div>
								<div className="list-cart__price"><span className="color_primary">1 x</span> $19.00</div>
							</div>
						</li>
						<li className="list-cart__item">
              <i className="list-cart__icon close"></i>
							<div className="list-cart__img"><img className="img-responsive" src={img2} height="87" width="87" alt="Foto"/></div>
							<div className="list-cart__inner">
								<h3 className="list-cart__title">Vegetarian Supreme</h3>
								<div className="list-cart__size"><span className="list-cart__size_name">Size:</span> Jumbo</div>
								<div className="list-cart__price"><span className="color_primary">1 x</span> $34.00</div>
							</div>
						</li>
						<li className="list-cart__item">
              <i className="list-cart__icon close"></i>
							<div className="list-cart__img"><img className="img-responsive" src={img3} height="87" width="87" alt="Foto" /></div>
							<div className="list-cart__inner">
								<h3 className="list-cart__title">Spiced Pumpkin</h3>
								<div className="list-cart__size"><span className="list-cart__size_name">Size:</span> Small</div>
								<div className="list-cart__price"><span className="color_primary">1 x</span> $26.00</div>
							</div>
						</li>
					</ul>
					<div className="total-price clearfix">Order Total
						<span className="total-price__number">$79.00</span>
					</div>
					<a className="total-price__btn ui-btn ui-btn_mod-a btn-effect btn-block" href="javascript:void(0);">view shopping cart</a>
					<a className="total-price__btn ui-btn ui-btn-primary btn-effect btn-block" href="javascript:void(0);">checkout</a>
				</section>
    </div>
  );
}

export default Cart;