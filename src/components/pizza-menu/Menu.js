import React, {Component} from "react";
import Item from './Item';

export class Menu extends Component {
  render() {
    return (<div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="pizza-builder__wrap-check">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
            </div>

         </div>
      </div>
    </div>);
  }
}

export default Menu;
