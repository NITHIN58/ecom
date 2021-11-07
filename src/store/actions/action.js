
import * as actionTypes from "../constants/action-types"

export function addArticle(payload){
    return {type:actionTypes.ADD_ARTICLE,payload:payload}
};
export function login(payload){
    return {type:actionTypes.LOGIN,payload:payload}
};
// export function addProduct(payload){
//     return {type:actionTypes.PRODUCT,payload:payload}
// }

export function addProduct(payload) {
    return { type: actionTypes.ADD_PRODUCT_DATA, payload: payload };
  }
  
  export const getProductSuccess = (data) => {
    return { type: actionTypes.GET_PRODUCT_DATA, payload: data };
  };
//type action example add sub 
//second one
//we can add type directly here from actiontype(get by using props through ,imported as actiontypes from te file action-type.js)