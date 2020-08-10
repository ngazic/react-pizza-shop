import Form from './Form';
import Payment from './Payment';
import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
        <div class="section_mod-f">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="checkout-top-line">Returning customer? <a class="checkout-top-line__link" href="javascript:void(0);">Click here to login</a></div>
							</div>
							<div class="col-md-8">
								<Form />
							</div>
							<div className="col-md-4">
								<Payment />
							</div>
						</div>
					</div>
				</div>
    );
  }
}

export default Checkout;