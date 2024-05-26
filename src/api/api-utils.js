export const checkIfSneakerIsAdded = (cartItems, sneaker) => {
  return cartItems.find((item) => item.id === sneaker.id);
};
