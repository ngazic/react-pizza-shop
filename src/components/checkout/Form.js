import React from 'react';
import Select from 'react-select';

function Form(props) {
  const selectOptions = [
    {label: 'Bosnia and Herzegovina', value: 'BH'},
    {label: 'US', value: 'US'},
    {label: 'Germany', value: 'DE'}
  ]
  console.log('form =============================')
  return (
    <form className="form-details">
      <section className="section-area">
        <h2 className="ui-title-inner ui-title-inner_mod-a">Billing Details</h2>
        <label className="ui-form-label">COUNTRY *</label>
        <select className="selectpicker bs-select-hidden" data-style="ui-select ui-select_mod-a" data-width="100%">
          <option>United Kingdom (UK)</option>
          <option>United Kingdom (UK)-2</option>
          <option>United Kingdom (UK)-3</option>
        </select>
        <Select options={selectOptions} className="item-select" classNamePrefix="item-select" isSearchable={false} defaultValue={selectOptions[0]} />
        <div className="btn-group bootstrap-select" style={{width: '100%'}}><button type="button" className="btn dropdown-toggle ui-select ui-select_mod-a" data-toggle="dropdown" title="United Kingdom (UK)" aria-expanded="false"><span className="filter-option pull-left">United Kingdom (UK)</span>&nbsp;<span className="ui-select__icon"></span></button><div className="dropdown-menu open"><ul className="dropdown-menu inner" role="menu"><li data-original-index="0" className="selected"><a tabindex="0" data-tokens="null"><span className="text">United Kingdom (UK)</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1" className=""><a tabindex="0" data-tokens="null"><span className="text">United Kingdom (UK)-2</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" className=""><a tabindex="0" data-tokens="null"><span className="text">United Kingdom (UK)-3</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div></div>
        <div className="row">
          <div className="col-md-6">
            <label className="ui-form-label">FIRST NAME *</label>
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6">
            <label className="ui-form-label">LAST NAME *</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <label className="ui-form-label">COMPANY NAME</label>
        <input className="form-control" type="text" />
        <label className="ui-form-label">ADDRESS *</label>
        <input className="form-control form-control_second" type="text" placeholder="Street address" />
        <input className="form-control" type="text" placeholder="Apartment, suite, unit etc. (optional)" />
        <label className="ui-form-label">TOWN / CITY *</label>
        <input className="form-control" type="text" placeholder="Town / City" />
        <div className="row">
          <div className="col-md-6">
            <label className="ui-form-label">COUNTY</label>
            <input className="form-control" type="text" placeholder="State / County" />
          </div>
          <div className="col-md-6">
            <label className="ui-form-label">POSTCODE *</label>
            <input className="form-control" type="text" placeholder="Postcode / Zip" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="ui-form-label">EMAIL ADDRESS *</label>
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6">
            <label className="ui-form-label">PHONE *</label>
            <input className="form-control" type="text" />
          </div>
        </div>

        <input className="forms__check hidden" id="create-account" type="checkbox" name="create-account" value="" />
        <label className="forms__label forms__label-check forms__label-check_mod-a" for="create-account">Create an account?</label>
      </section>

      <section className="section_mod-h">
        <h2 className="ui-title-inner ui-title-inner_mod-b">Shipping Address</h2>
        <input className="forms__check hidden" id="shipping-address" type="checkbox" name="shipping-address" value="" />
        <label className="forms__label forms__label-check forms__label-check_mod-a" for="shipping-address">Ship to a different address?</label>
        <label className="ui-form-label">ORDER NOTES</label>
        <textarea className="form-control" name="comment" rows="4" placeholder="Notes about your order , e.g. special notes for delivery." required=""></textarea>
      </section>
    </form>
  );
}

export default Form;