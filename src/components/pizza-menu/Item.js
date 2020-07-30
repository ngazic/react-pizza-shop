import React, {Component} from "react";
import pizzaImg from "../../images/list-catalog/1.png";
import Select from "react-select";

const pizzaSizes = [
  {
    value: "Small",
    label: "Small"
  }, {
    value: "Medium",
    label: "Medium"
  }, {
    value: "Large",
    label: "Large"
  }, {
    value: "Jumbo",
    label: "Jumbo"
  }, {
    value: "Party",
    label: "Party"
  }
];

export class Item extends Component {
  render() {
    return (
            <div className="pizza-builder__item pizza-builder__item_mod-b" >
              <div className="pizza-builder__check-img pizza-builder__check-img pizza-builder__check-img_mod-a">
                <img className="img-fluid" src={pizzaImg} height="258" width="258" alt="Foto"/>
              </div>
              <div className="pizza-builder__check-name">Kimchi BBQ Chicken</div>
              <div className="pizza-builder__check-description pizza-builder__check-description_mod-a">
                Slow Cooked Pulled Chicken marinated in Bulgogi sauce, Shitake Mushrooms, Shallots on a Garlic base, Garnished with Kimchi, Red &amp; Green Chilli
              </div>
              <div className="pizza-builder__check-price pizza-builder__check-price_mod-a">
                $21.00
              </div>
              <div className="pizza-builder__controls-wrapper">
              <Select options={pizzaSizes} className="item-select" classNamePrefix="item-select" isSearchable={false} defaultValue={pizzaSizes[0]}/>
              <a className="pizza-builder__btn-select ui-btn ui-btn-primary btn-effect" href="#">
                add
              </a>
              </div>
            </div>)
  }
}

export default Item;
