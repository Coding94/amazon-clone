import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import {loadCart} from '../data/cart.js';


async function loadPage(){

await loadProductsFetch(); //instead of using .then, we use await
//await lets us write asynchronous code like normal code.
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/* async makes a function return a promise. await lets us wait for a promise to finish before going to the next line.

we can only yse await when we're inside an async function: async function loadPage(); await..main reason why we use async.

function loadPage(){
  return new Promise((resolve)=>{
    console.log('load page');
    resolve();
  });
}

*/



//FINAL VERSION WITH PRODUCTS & CARTS IN PROMISE.ALL
/*
Promise.all([
  loadProductsFetch(), // returns promise directly, no need to create a promise.
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
]).then((values)=>{ // console (2) ['value', undefined]
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/* THRID VERSION WITH CART

new Promise((resolve) =>{
  loadProducts(()=> {
    resolve();
  })
}).then(()=> {
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });
}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/* SECOND VERSION WITH PROMISE

new Promise((resolve) =>{
  loadProducts(()=> {
    resolve();
  })
}).then(()=> {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/* FIRST VERSION WITHOUT PROMISE

loadProducts(()=>{
renderOrderSummary();
renderPaymentSummary();
});
*/