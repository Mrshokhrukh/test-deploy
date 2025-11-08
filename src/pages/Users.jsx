import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ContextData } from '../components/ContextData';
import { useNavigate } from 'react-router-dom';

const statuses = ['pending', 'rejected', 'success'];

const Users = () => {
  const { state, dispatch, handleDelete, handleEdit } = useContext(ContextData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCHING' });
        const { data } = await axios.get('https://dummyjson.com/users');
        const newData = data.users.map((user) => {
          return {
            ...user,
            status: statuses[Math.floor(Math.random() * statuses.length)],
          };
        });
        dispatch({ type: 'FETCHED', payload: newData });
      } catch (error) {
        dispatch({ type: 'REJECTED', error: error.message });
      }
    };

    fetchData();
  }, []);

  const checkPendingState = (status) => {
    const initialClass = 'rounded-md py-1 px-1.5 border  text-sm font-medium ';

    const statusPayment = {
      success: ' text-green-300 border-green-200 ',
      pending: ' text-orange-300 border-amber-200 ',
      rejected: ' text-red-300 border-red-200 ',
    };

    return (
      <span className={`${initialClass}${statusPayment[status]}`}>
        {status}
      </span>
    );
  };

  const content = () => {
    return (
      <>
        {state.isLoading == true ? (
          <tr>
            <td colSpan={5} className="text-center text-gray-100">
              Loading...
            </td>
          </tr>
        ) : state.data.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center text-gray-400">
              No Data Found
            </td>
          </tr>
        ) : (
          !state.isLoadin &&
          state.data.length > 0 &&
          state.data.map((item, index) => {
            return (
              <tr
                key={item.id}
                onClick={() => handleUserDetailsNavigate(item.id)}
                className="hover:bg-gray-300 cursor-pointer"
              >
                <td>{index + 1}</td>
                <td className="item">
                  <img
                    src={item.image}
                    alt=""
                    className="mx-auto block w-[40px] h-[40px] rounded-full object-cover"
                  />
                </td>
                <td className="item overflow-auto">{item.firstName}</td>
                <td className="item">{checkPendingState(item.status)}</td>
                <td className="item space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="cursor-pointer hover:bg-orange-100 text-orange-300 text-sm border border-orange-300 rounded py-1 px-3"
                  >
                    edi
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="cursor-pointer hover:bg-red-200 text-red-400 text-sm border border-red-300 rounded py-1 px-3"
                  >
                    del
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </>
    );
  };

  const handleUserDetailsNavigate = (id) => {
    navigate(`/dashboard/users/${id}`);
  };

  return (
    <div className="h-screen overflow-auto text-white pt-12">
      <h1 className="text-4xl text-center my-5 font-stretch-110%">
        Products Table Data
      </h1>

      <table className="w-[600px] mx-auto p-2 rounded ">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>{content()}</tbody>
      </table>
    </div>
  );
};

export default Users;

// complex state menagement -> useReducer
