import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 10"
          clicked={() => this.props.onAddFive(10)}
        />
        <CounterControl
          label="Subtract 9"
          clicked={this.props.onSubstractFive}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.res.map((result) => {
            return (
              <li
                key={result.id}
                onClick={() => this.props.onDeleteResult(result.id)}
              >
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    res: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddFive: (addVal) => dispatch({ type: actionTypes.ADD, value: addVal }),
    onSubstractFive: () => dispatch({ type: actionTypes.SUBTRACT, value: 9 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
