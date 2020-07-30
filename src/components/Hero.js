import React from 'react';
import {connect} from 'react-redux';

function Hero (props){
    return (
      <div className="section-title">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="section__inner">
										<h1 className="ui-title-page">{props.pageTitle}</h1>
										<ol className="breadcrumb">
											<li><a href="home.html">Home</a></li>
											<li className="active">Menu</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
    )
}

const mapStateToProps = state => ({
  pageTitle: state.page
});

export default connect(mapStateToProps, null)(Hero)
