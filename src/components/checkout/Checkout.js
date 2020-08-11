import Form from './Form';
import Payment from './Payment';
import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
        <div className="section_mod-f">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="checkout-top-line">Returning customer? <a className="checkout-top-line__link" href="#">Click here to login</a></div>
							</div>
							<div className="col-md-8">
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