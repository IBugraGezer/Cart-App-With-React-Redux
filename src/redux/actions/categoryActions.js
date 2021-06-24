import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.changeCategory, payload: category };
}
