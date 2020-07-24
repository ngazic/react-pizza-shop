import React from "react";
import {connect} from "react-redux";
import {addNumber} from "../actions/counterActions";

function About(props) {
  return (<div>
    <h1>About!!!</h1>
    <div>
      The state in about component is:
      <span>{props.counter}</span>
    </div>
    <button onClick = {()=> {console.log('the props are');console.log(props); props.addNumber();}} >Increase</button>
  </div>);
}
const mapStateToProps = (state) =>({
 counter: state.counter.counter
});


export default connect(mapStateToProps, {addNumber})(About);


