const counter = (state, id) => {
  const index = state.cart.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.cart[index].quantity;
  }
};
const isInCart = (state, id) => {
  const result = !!state.cart.find((item) => item.id === id);
  return result;
};
const isInList = (state, id) => {
  const result = !!state.list.find((item) => item.id === id);
  return result;
};
export { counter, isInCart, isInList };
