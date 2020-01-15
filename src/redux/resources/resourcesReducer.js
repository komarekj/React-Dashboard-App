import _ from 'lodash';
import {
  RESOURCES_SET_LOADING,
  RESOURCES_SET_ERROR,
  RESOURCES_SET_DATA,
  RESOURCES_SET_SEARCH_RESULTS,
} from './resourcesActionTypes';

const initialResourceState = {
  isLoading: false,
  hasError: false,
  count: 0,
  totalPages: 0,
  items: [],
  pages: {},
  searchResults: [],
};

const initalState = {
  orders: { ...initialResourceState },
  members: { ...initialResourceState },
  rewards: { ...initialResourceState },
};

const resourcesReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESOURCES_SET_LOADING: {
      const { isLoading, resource } = payload;
      return {
        ...state,
        [resource]: {
          ...state[resource],
          isLoading,
        },
      };
    }
    case RESOURCES_SET_ERROR: {
      const { hasError, resource } = payload;
      return {
        ...state,
        [resource]: {
          ...state[resource],
          isLoading: false,
          hasError,
        },
      };
    }
    case RESOURCES_SET_DATA: {
      const { count, page, totalPages, items, resource } = payload;
      const newItems = [...state[resource].items, ...items];
      const newUniqItems = _.uniqBy(newItems, '_id');
      const pageItemIds = items.map(item => item._id);

      return {
        ...state,
        [resource]: {
          ...state[resource],
          count,
          totalPages,
          items: newUniqItems,
          pages: {
            ...state[resource].pages,
            [page]: pageItemIds,
          },
          isLoading: false,
          hasError: false,
        },
      };
    }
    case RESOURCES_SET_SEARCH_RESULTS: {
      const { results, resource } = payload;
      return {
        ...state,
        [resource]: {
          ...state[resource],
          searchResults: results,
          isLoading: false,
          hasError: false,
        },
      };
    }
    default:
      return state;
  }
};

export default resourcesReducer;
