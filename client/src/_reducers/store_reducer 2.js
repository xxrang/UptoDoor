import {
  STORE_DATAS,
  STORE_FILTER_HASHTAG,
  STORE_FILTER_BY_SEARCH,
  STORE_FILTER_BY_CLICK,
} from "../_actions/type";


export default function admin_reducer(state = {}, action) {

  switch (action.type) {
    case STORE_DATAS:
      return action.payload;
    case STORE_FILTER_HASHTAG:
      return action.payload;
    case STORE_FILTER_BY_SEARCH:
      return action.payload;
    case STORE_FILTER_BY_CLICK:
      return action.payload;
    default:
      return state;
  }
}