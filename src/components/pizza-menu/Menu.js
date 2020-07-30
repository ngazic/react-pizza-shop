import React, {Component} from "react";
import Item from './Item';

export class Menu extends Component {
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-12">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />

         </div>
      </div>
    </div>);
  }
}

export default Menu;
