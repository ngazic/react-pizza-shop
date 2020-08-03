import React, { Component } from "react";
import Select from "react-select";


class Item extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pizzaImg: null,
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
   getImage(img) {
     var that= this;
   import('../../images/list-catalog/'+img+'.png').then((pizzaImg)=>{console.log('thsi is response from the image import');console.log(pizzaImg);that.setState({pizzaImg})})
  }

  render() { 
    this.getImage(this.props.img);
    return (
            <div className="pizza-builder__item pizza-builder__item_mod-b" >
              <div className="pizza-builder__check-img pizza-builder__check-img pizza-builder__check-img_mod-a">
                <img className="img-fluid" src={this.state.pizzaImg} height="258" width="258" alt="Foto"/>
              </div>
              <div className="pizza-builder__check-name">{this.props.title}</div>
              <div className="pizza-builder__check-description pizza-builder__check-description_mod-a">
              {this.props.text}
              {this.state.pizzaImg}
              </div>
              <div className="pizza-builder__check-price pizza-builder__check-price_mod-a">
                $21.00
              </div>
              <div className="pizza-builder__controls-wrapper">
              <Select options={this.state.pizzaSizes} className="item-select" classNamePrefix="item-select" isSearchable={false} defaultValue={this.state.pizzaSizes[0]}/>
              <button className="pizza-builder__btn-select ui-btn ui-btn-primary btn-effect" href="#">
                add
              </button>
              </div>
            </div>)

  }
}

export default Item;
