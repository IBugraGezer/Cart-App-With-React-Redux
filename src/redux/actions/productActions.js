import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(category) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (category) {
      url += "?categoryId=" + category.id;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getProductsSuccess(data)));
  };
}
