import React from 'react';

function Foooter(props) {
  return (
    <footer class="footer">
            <div class="container">
							<div class="row">
								<div class="col-12">
									<div class="footer-contacts"><span class="footer-contacts__number">+34 9 368 7050</span>order@pizza.com</div>
									<div class="footer-decor decor-2">&amp;</div>
									<ul class="footer-list list-group list-group-horizontal-md justify-content-center">
										<li class="footer-list__item"><a class="footer-list__link" href="facebook.com">Facebook</a></li>
										<li class="footer-list__item"><a class="footer-list__link" href="twitter.com">Twitter</a></li>
										<li class="footer-list__item"><a class="footer-list__link" href="instagram.com">Instagram</a></li>
										<li class="footer-list__item"><a class="footer-list__link" href="pinterest.com">Pinterest</a></li>
										<li class="footer-list__item"><a class="footer-list__link" href="flickr.com">Flickr</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="copyright border-top">
							<div class="container">
								<div class="row">
									<div class="col-12">
											<div class="text-center">Copyright © 2020 <a class="copyright__link" href="somedummylink.com">Pezzeria.</a> All rights reserved.</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
  );
}

export default Foooter;