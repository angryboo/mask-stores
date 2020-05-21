import { useReducer, useEffect, useCallback } from 'react';
import { initialState, mapReducer } from '../Reducer/MapReducer';
import { stores } from '../API/StoresAPI';

const useMap = () => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  const getStores = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const storeData = await stores.getStores(
        state.latitude,
        state.longitude,
        state.radius,
      );
      if (storeData.status === 200) {
        dispatch({
          type: 'STORE',
          stores: storeData.data.stores,
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: storeData.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  }, []);

  // const getAera = useCallback();

  useEffect(() => {
    getStores();
  }, []);

  return [state, getStores];
};

export default useMap;
