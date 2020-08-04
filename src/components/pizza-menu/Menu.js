import React, {Component} from "react";
import Item from './Item';
import pizzas from '../../dummy-data';

export class Menu extends Component {
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-12">
          {Object.keys(pizzas).map((pizza,index) => {
            return <Item key={index} title={pizza}  price={pizzas[pizza].price} text={pizzas[pizza].text} img={pizzas[pizza].image} />;
          })}
         </div>
      </div>
    </div>);
  }
}

export default Menu;
