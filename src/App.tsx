import * as React from "react";
import { connect } from "react-redux";

const Count = props => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ width: 120 }}>
      <h3>Sharks</h3>
      <h1>{props.sharks}</h1>
      <button onClick={props.incrementSharks}>+1</button>
    </div>
    <div style={{ width: 120 }}>
      <h3>Dolphins</h3>
      <h1>{props.dolphins}</h1>
      <button onClick={props.incrementDolphins}>+1</button>
    </div>
    <p>Using Rematch Models</p>
  </div>
);

const mapState = state => ({
  sharks: state.sharks,
  dolphins: state.dolphins,
});

const mapDispatch = dispatch => ({
  incrementSharks: dispatch.sharks.increment,
  incrementDolphins: dispatch.dolphins.increment,
});

export default connect(mapState, mapDispatch)(Count);
