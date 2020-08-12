import React from 'react';
import Order from './Order';

const payPalImg = require('../../assets/images/payment/1.png');

export default function Payment() {
  return (
    <div className="section-table-order section-table-order_mod-a">
										<section className="section-area">
											<h2 className="table-order__title ui-title-inner">Your Order</h2>
											<Order />
										</section>

										<section className="section_mod-g">
											<h2 className="table-order__title ui-title-inner">Payment Methods</h2>
											<form className="form-payment">
												<input className="form-payment__radio forms__check hidden" id="form-payment_bank" type="radio" name="payment" value="bank"/>
												<label className="form-payment__radio-label forms__label forms__label-radio" for="form-payment_bank">
													<span className="form-payment__item-title">Direct Bank Transfer</span>
													<span className="form-payment__description">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</span>
												</label>
												<input className="form-payment__radio forms__check hidden" id="form-payment_cheque" type="radio" name="payment" value="cheque"/>
												<label className="form-payment__radio-label forms__label forms__label-radio" for="form-payment_cheque">
													<span className="form-payment__item-title">Cheque Payment</span>
												</label>
												<input className="form-payment__radio forms__check hidden" id="form-payment_pay-pal" type="radio" name="payment" value="pay-pal"/>
												<label className="form-payment__radio-label forms__label forms__label-radio" for="form-payment_pay-pal">
													<span className="form-payment__item-title">PayPal</span>
													<span className="form-payment__img"><img className="img-fluid" src={payPalImg} height="40" width="152" alt="PayPal"/></span>
													<a className="form-payment__link" href='#' >What Is PayPal?</a>
												</label>
												<input className="form-payment__check forms__check hidden" id="form-payment__check" type="checkbox" name="pizza-size" value=""/>
												<label className="form-payment__check-label forms__label forms__label-check" for="form-payment__check">
													<span className="form-payment__item-title">I have read and accept the <a className="form-payment__link-2" href="#">Terms &amp; Conditions</a></span>
												</label>
												<a className="form-payment__btn ui-btn ui-btn-primary btn-effect" href="#" >place order</a>
											</form>
										</section>


									</div>
  )
}
