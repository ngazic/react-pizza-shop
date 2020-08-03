import React, {Component} from "react";
import Item from './Item';
import pizzas from '../../dummy-data';

export class Menu extends Component {
  render() {
    console.log('all pizzas are ')
    console.log(Object.keys(pizzas))
    return (<div className="container">
      <div className="row">
        <div className="col-12">
          {Object.keys(pizzas).map((pizza) => {
            console.log('pizza from the menu')
            console.log(pizza)
            return <Item title={pizza}  price={pizzas[pizza].price} text={pizzas[pizza].text} img={pizzas[pizza].image} />;
          })}
         </div>
      </div>
    </div>);
  }
}

export default Menu;
