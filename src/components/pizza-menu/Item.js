import React, { Component } from "react";
import Select from "react-select";
import {connect} from 'react-redux';
import {addItemToCart} from '../../actions/cartActions';


class Item extends Component {

constructor(props) {
  super(props);
  this.state = {
      pizzaImg: this.props.img,
      price: this.props.price.Small,
      size: "Small",
      pizzaSizes :[
      {
        value: this.props.price.Small,
        label: "Small"
      }, {
        value: this.props.price.Medium,
        label: "Medium"
      }, {
        value: this.props.price.Large,
        label: "Large"
      }, {
        value: this.props.price.Jumbo,
        label: "Jumbo"
      }, {
        value: this.props.price.Party,
        label: "Party"
      }
    ]
    }
  }
   onChange = (event)=> {
     console.log(event)
    this.setState({
      price: event.value,
      size: event.label
    })
  }

  render() { 
    return (
            <div className="pizza-builder__item pizza-builder__item_mod-b" >
              <div className="pizza-builder__check-img pizza-builder__check-img pizza-builder__check-img_mod-a">
                <img className="img-fluid" src={require( `../../images/list-catalog/${this.props.img}.png`)} height="258" width="258" alt="Foto"/>
              </div>
              <div className="pizza-builder__check-name">{this.props.title}</div>
              <div className="pizza-builder__check-description pizza-builder__check-description_mod-a">
              {this.props.text}
              </div>
              <div className="pizza-builder__check-price pizza-builder__check-price_mod-a">
                ${this.state.price}
              </div>
              <div className="pizza-builder__controls-wrapper">
              <Select options={this.state.pizzaSizes} className="item-select" classNamePrefix="item-select" isSearchable={false} defaultValue={this.state.pizzaSizes[0]} onChange={this.onChange}/>
              <button className="pizza-builder__btn-select ui-btn ui-btn-primary btn-effect"onClick={()=>this.props.add({title: this.props.title, size: this.state.size, price: this.state.price, image: this.state.pizzaImg})} >
                add
              </button>
              </div>
            </div>)

  }
}



export default connect(null, {add:addItemToCart})(Item);
