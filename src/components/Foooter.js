import React from 'react';

function Foooter(props) {
  return (
    <footer className="footer">
            <div className="container">
							<div className="row">
								<div className="col-12">
									<div className="footer-contacts"><span className="footer-contacts__number">+34 9 368 7050</span>order@pizza.com</div>
									<div className="footer-decor decor-2">&amp;</div>
									<ul className="footer-list list-group list-group-horizontal-md justify-content-center">
										<li className="footer-list__item"><a className="footer-list__link" href="facebook.com">Facebook</a></li>
										<li className="footer-list__item"><a className="footer-list__link" href="twitter.com">Twitter</a></li>
										<li className="footer-list__item"><a className="footer-list__link" href="instagram.com">Instagram</a></li>
										<li className="footer-list__item"><a className="footer-list__link" href="pinterest.com">Pinterest</a></li>
										<li className="footer-list__item"><a className="footer-list__link" href="flickr.com">Flickr</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="copyright border-top">
							<div className="container">
								<div className="row">
									<div className="col-12">
											<div className="text-center">Copyright © 2020 <a className="copyright__link" href="somedummylink.com">Pezzeria.</a> All rights reserved.</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
  );
}

export default Foooter;