export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  order.unshift(); //adds order to front of the array
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders))
}
