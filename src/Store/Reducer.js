const initialState = {
  counter: 3456,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        counter: state.counter + action.value,
      };
    case "SUBSTRACT":
      return {
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};

export default reducer;
