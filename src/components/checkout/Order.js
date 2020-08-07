import React from 'react'

export default function Order() {
  return (
    <div class="section-table-order section-table-order_mod-a">
										<section class="section-area">
											<h2 class="table-order__title ui-title-inner">Your Order</h2>
											<table class="table-order">
												<thead>
													<tr>
														<th>PRODUCT</th>
														<th>TOTAL</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="no-br">Moorish Lamb<span class="color_primary"> x </span><span class="enumerator__input">1</span>
														</td>
														<td>
															<span class="table-order__price">$19.00</span>
														</td>
													</tr>
													<tr>
														<td class="no-br">Vegetarian Supreme<span class="color_primary"> x </span><span class="enumerator__input">1</span>
														</td>
														<td>
															<span class="table-order__price">$34.00</span>
														</td>
													</tr>
													<tr>
														<td class="border-cell no-br">Spiced Pumpkin<span class="color_primary"> x </span><span class="enumerator__input">1</span>
														</td>
														<td class="border-cell">
															<span class="table-order__price">$26.00</span>
														</td>
													</tr>
													<tr>
														<td class="table-order__total">Order Total</td>
														<td class="table-order__total">$79.00</td>
													</tr>
												</tbody>
											</table>
										</section>

										<section class="section_mod-g">
											<h2 class="table-order__title ui-title-inner">Payment Methods</h2>
											<form class="form-payment">
												<input class="form-payment__radio forms__check hidden" id="form-payment_bank" type="radio" name="payment" value="bank"/>
												<label class="form-payment__radio-label forms__label forms__label-radio" for="form-payment_bank">
													<span class="form-payment__item-title">Direct Bank Transfer</span>
													<span class="form-payment__description">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</span>
												</label>
												<input class="form-payment__radio forms__check hidden" id="form-payment_cheque" type="radio" name="payment" value="cheque"/>
												<label class="form-payment__radio-label forms__label forms__label-radio" for="form-payment_cheque">
													<span class="form-payment__item-title">Cheque Payment</span>
												</label>
												<input class="form-payment__radio forms__check hidden" id="form-payment_pay-pal" type="radio" name="payment" value="pay-pal"/>
												<label class="form-payment__radio-label forms__label forms__label-radio" for="form-payment_pay-pal">
													<span class="form-payment__item-title">PayPal</span>
													<span class="form-payment__img"><img class="img-responsive" src="assets/media/payment/1.png" height="40" width="152" alt="PayPal"/></span>
													<a class="form-payment__link" >What Is PayPal?</a>
												</label>
												<input class="form-payment__check forms__check hidden" id="form-payment__check" type="checkbox" name="pizza-size" value=""/>
												<label class="form-payment__check-label forms__label forms__label-check" for="form-payment__check">
													<span class="form-payment__item-title">I have read and accept the <a class="form-payment__link-2" >Terms &amp; Conditions</a></span>
												</label>
												<a class="form-payment__btn ui-btn ui-btn-primary btn-effect" >place order</a>
											</form>
										</section>


									</div>
  )
}
