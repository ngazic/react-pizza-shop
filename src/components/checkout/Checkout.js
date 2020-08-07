import React, { Component } from 'react';
import Form from './Form';

class Checkout extends Component {
  render() {
    return (
        <div class="section_mod-f">
						<div class="container">
							<div class="row">
								<div class="col-md-8">
                  <Form />
									</div>
								</div>
							</div>
						</div>
    );
  }
}

export default Checkout;