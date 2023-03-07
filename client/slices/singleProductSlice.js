import axios from "axios";

// Action Types
const FETCH_SINGLE_PRODUCT_SUCCESS = "FETCH_SINGLE_PRODUCT_SUCCESS";

// Action Creator
export const fetchSingleProductSuccess = (product) => ({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: product });

// Thunk Action Creator
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
    dispatch(fetchSingleProductSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

// Reducer
const initialState = {};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default singleProductReducer;

// Selector
export const selectSingleProduct = (state) => state.singleProduct;
