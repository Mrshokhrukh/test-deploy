import axios from 'axios';
import React, { createContext, useReducer } from 'react';

export const ContextData = createContext();

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, isLoading: true };
    case 'FETCHED':
      return { ...state, isLoading: false, data: action.payload };
    case 'REJECTED':
      return { ...state, isLoading: false, error: action.payload };

    case 'DELETE':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case 'EDIT':
      return {
        ...state,
        data: state.data.map((item) => {
          return item.id === action.payload.id ? action.payload.newData : item;
        }),
      };
  }
};

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const ContextDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://68d2a5bbcc7017eec544baec.mockapi.io/blog/items/${id}`
      );
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      dispatch({ type: 'REJECTED', error: 'xatolik' });
    }
  };

  const handleEdit = (id) => {
    const newData = {
      name: prompt('enter new name'),
      image: prompt('enter new image'),
      status: prompt('enter new status'),
    };

    handleSubmitEdit(id, newData);
  };

  const handleSubmitEdit = async (id, newData) => {
    try {
      await axios.put(
        `https://68d2a5bbcc7017eec544baec.mockapi.io/blog/items/${id}`,
        newData
      );
      dispatch({ type: 'EDIT', payload: { id, newData } });
    } catch (error) {
      dispatch({ type: 'REJECTED', error: 'xatolik' });
    }
  };

  return (
    <ContextData.Provider value={{ state, dispatch, handleDelete, handleEdit }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextDataProvider;
