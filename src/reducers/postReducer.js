import { DELETE_POST, FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function stateCtrl(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    case DELETE_POST:
      return{
        items: state.items.filter(item=>item.id !== action.payload),
        item:{}
      }
  }
}
