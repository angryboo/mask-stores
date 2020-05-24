export const initialState = {
  searchMode: false,
  selectLocation: { latitude: null, longitude: null },
  searchStores: [],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

// eslint-disable-next-line import/prefer-default-export
export const searchReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        searchMode: initialState,
        selectLocation: { ...initialState.selectLocation },
        searchStores: [...initialState.searchStores],
        error: { ...initialState.error },
        loading: true,
      };
    case 'STORE':
      return {
        ...state,
        searchStores: [...initialState.searchStores],
      };
    case 'LOCATION':
      return {
        ...state,
        selectLocation: { ...action.selectLocation },
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
