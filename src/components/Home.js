import React from 'react'
import {connect} from 'react-redux';

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <div>state is <span>{props.counter}</span></div>
    </div>
  )
}
const mapStateToProps = (state) =>({
  counter: state.counter.counter
 });
 

export default connect(mapStateToProps, null)(Home);
