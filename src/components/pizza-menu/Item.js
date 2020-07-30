import React, {Component} from "react";
import pizzaImg from "../../images/list-catalog/1.png";
import Select from "react-select";

const pizzaSizes = [
  {
    value: "seki",
    label: "seki"
  }, {
    value: "begic",
    label: "begic"
  }, {
    value: "mirza",
    label: "mirza"
  }, {
    value: "gaza",
    label: "gaza"
  }
];

export class Item extends Component {
  render() {
    return (
            <div class="pizza-builder__item pizza-builder__item_mod-b" tabindex="1">
              <div class="pizza-builder__check-img pizza-builder__check-img pizza-builder__check-img_mod-a">
                <img class="img-fluid" src={pizzaImg} height="258" width="258" alt="Foto"/>
              </div>
              <div class="pizza-builder__check-name">Kimchi BBQ Chicken</div>
              <div class="pizza-builder__check-description pizza-builder__check-description_mod-a">
                Slow Cooked Pulled Chicken marinated in Bulgogi sauce, Shitake Mushrooms, Shallots on a Garlic base, Garnished with Kimchi, Red &amp; Green Chilli
              </div>
              <div class="pizza-builder__check-price pizza-builder__check-price_mod-a">
                $21.00
              </div>
              <div className="pizza-builder__controls-wrapper">
              <Select options={pizzaSizes} className="item-select" classNamePrefix="item-select" isSearchable={false} defaultValue={pizzaSizes[0]}/>
              <a class="pizza-builder__btn-select ui-btn ui-btn-primary btn-effect" href="#">
                add
              </a>
              </div>
            </div>)
  }
}

export default Item;
