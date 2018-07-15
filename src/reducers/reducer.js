import { SEARCH_ACTION_FULFILLED } from "../actions/searchActions/searchActions";
import { SORT_ACTION } from "../actions/sortActions/sortActions";

const sort = (data, by) => {
  let sortProp = '';

  switch (by) {
    case 'TITLE':
      sortProp = 'Title';
      break;
    case 'DATE':
      sortProp = 'Year';
      break;
    default:
      sortProp = 'Title';
      break;
  }

  return data.sort((a, b) => {
    if(a[sortProp] > b[sortProp])
      return 1;
    if(a[sortProp] < b[sortProp])
      return -1;
    return 0;
  });
};

const reducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH_ACTION_FULFILLED:
      const isDataAvailable = action.payload && action.payload.Search;
      state = {
        ...state,
        data: {
          ...action.payload,
          Search: isDataAvailable ? sort(action.payload.Search, state.sortedBy) : null
        }
      };
      break;
    case SORT_ACTION:
      const isSortable = state.data && state.data.Search;
      state = {
        ...state,
        sortedBy: action.payload,
        data: {
          ...state.data,
          Search: isSortable ? sort(state.data.Search, action.payload) : null
        }
      };
      break;
    default:
      break;
  }

  return state;
};


export default reducer;
