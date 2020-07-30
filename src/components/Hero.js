import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Hero (props){
    return (
      <div className="section-title">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="section__inner">
										<h1 className="ui-title-page">{props.pageTitle.page}</h1>
										<ol className="breadcrumb">
											<li><Link to='/'>Home</Link></li>
                      {(props.pageTitle.link) ? <li className="active">{props.pageTitle.link}</li> : null}
											
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
