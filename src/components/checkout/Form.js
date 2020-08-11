import React from 'react';
import Select from 'react-select';

function Form(props) {
  const selectOptions = [
    {label: 'Bosnia and Herzegovina', value: 'BH'},
    {label: 'US- America', value: 'US'},
    {label: 'UK- United Kingdom', value: 'UK'},
    {label: 'Germany', value: 'DE'}
  ]
  return (
    <form className="form-details">
      <section className="section-area">
        <h2 className="ui-title-inner ui-title-inner_mod-a">Billing Details</h2>
        <label className="ui-form-label">COUNTRY *</label>
        <Select options={selectOptions} className="form-select" classNamePrefix="form-select" isSearchable={false}  />
       
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