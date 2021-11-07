import * as actionTypes from "../constants/action-types"
// 3rd one  first initialise state as initialstae then function with parameter  state=initialstate,action inside function switch cases
//import createStore  and rootreducer the give store=createstore(rootreducer)and <provider stoe={store}>
//state initialisation
const  initialState={
    loggedIn:false,
    articles:[],
    ProductData: [],
    addProductData: {}
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_ARTICLE:
            return{...state,...state.articles.push(action.payload)};
        case actionTypes.LOGIN:
            return{...state,loggedIn:true}
        case actionTypes.GET_PRODUCT_DATA:
            return {...state, ...state.productData.push(action.payload)};
        case actionTypes.ADD_PRODUCT_DATA:
            return {...state, addProductData: action.payload};
        default:
            return{...state}
    }

};
export default rootReducer;